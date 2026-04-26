"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Globe,
  Link as LinkIcon,
  Megaphone,
  Palette,
  Shield,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";

const TIMELINE_ICON_MAP: Record<string, LucideIcon> = {
  megaphone: Megaphone,
  bot: Bot,
  shield: Shield,
  palette: Palette,
  globe: Globe,
  sparkles: Sparkles,
};
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/locales";
import { DICTIONARIES } from "@/lib/i18n/dictionaries";

/** Degrees per second — tuned for smoother/faster perceived motion. */
const ORBIT_ROTATION_DPS = 9;

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  /**
   * Serializable icon identifier passed from Server Components.
   * Resolved to a Lucide icon in this Client Component.
   */
  iconKey?: string;
  iconImage?: string;
  iconAlt?: string;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  className?: string;
  locale: Locale;
}

export default function RadialOrbitalTimeline({
  timelineData,
  className,
  locale,
}: RadialOrbitalTimelineProps) {
  const dict = DICTIONARIES[locale];
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const viewMode = "orbital" as const;
  const centerOffset = { x: 0, y: 0 };
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  function calculateNodePosition(index: number, total: number) {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  }

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    if (!autoRotate || viewMode !== "orbital") return;

    let frameId = 0;
    let lastTimestamp: number | null = null;

    const animateOrbit = (timestamp: number) => {
      if (lastTimestamp === null) {
        lastTimestamp = timestamp;
      }

      const elapsedMs = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      setRotationAngle((prev) => (prev + ORBIT_ROTATION_DPS * (elapsedMs / 1000)) % 360);
      frameId = window.requestAnimationFrame(animateOrbit);
    };

    frameId = window.requestAnimationFrame(animateOrbit);

    return () => window.cancelAnimationFrame(frameId);
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(((270 - targetAngle) % 360 + 360) % 360);
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-white bg-black border-white";
      case "in-progress":
        return "text-black bg-white border-black";
      case "pending":
        return "text-white bg-black/40 border-white/50";
      default:
        return "text-white bg-black/40 border-white/50";
    }
  };

  const TELEGRAM_NETWORK_NODE_ID = 2;
  const TELEGRAM_ADS_NODE_ID = 1;
  const TELEGRAM_GLOW_SIZE = 420;
  const totalNodes = timelineData.length;
  const telegramIndex = timelineData.findIndex(
    (item) => item.id === TELEGRAM_NETWORK_NODE_ID
  );
  const telegramPosition =
    telegramIndex >= 0 ? calculateNodePosition(telegramIndex, totalNodes) : null;
  const shouldShowTelegramFill =
    activeNodeId === TELEGRAM_NETWORK_NODE_ID ||
    activeNodeId === TELEGRAM_ADS_NODE_ID;

  return (
    <div
      className={cn(
        "relative isolate flex h-[min(720px,85vh)] w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[#050510]/90",
        className
      )}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      {/* Edge-to-edge cover — fills the rounded rect (no letterbox gaps) */}
      <div
        className="pointer-events-none absolute inset-0 z-[0] bg-[#050510]"
        style={{
          backgroundImage: "url('/assets/ayicik1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[0] bg-gradient-to-b from-black/35 via-black/15 to-black/45"
        aria-hidden
      />

      <div className="relative z-[1] flex h-full w-full max-w-4xl items-center justify-center contain-layout">
        <div
          className="absolute flex h-full w-full items-center justify-center will-change-transform"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {telegramPosition && shouldShowTelegramFill && (
            <div
              aria-hidden
              className="pointer-events-none absolute rounded-full blur-xl opacity-70"
              style={{
                width: TELEGRAM_GLOW_SIZE,
                height: TELEGRAM_GLOW_SIZE,
                // Center the glow on the telegram node (nodes use translate(x,y) from the same origin).
                transform: `translate3d(${telegramPosition.x - TELEGRAM_GLOW_SIZE / 2}px, ${
                  telegramPosition.y - TELEGRAM_GLOW_SIZE / 2
                }px, 0)`,
                background:
                  "radial-gradient(circle at center, rgba(34,211,238,0.65) 0%, rgba(160,32,240,0.26) 35%, rgba(255,105,180,0.14) 60%, transparent 72%)",
                zIndex: 60,
              }}
            />
          )}

          <div className="absolute z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 shadow-[0_0_24px_rgba(139,92,246,0.35)]">
            <div className="h-8 w-8 rounded-full bg-white/85" />
          </div>

          <div className="absolute h-96 w-96 rounded-full border border-white/10" />

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.iconKey
              ? TIMELINE_ICON_MAP[item.iconKey]
              : undefined;
            const hasImage = Boolean(item.iconImage);

            const nodeStyle: CSSProperties = {
              transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
              ...(autoRotate ? { willChange: "transform" as const } : {}),
            };

            return (
              <div
                key={item.id}
                ref={(el) => {
                  nodeRefs.current[item.id] = el;
                }}
                className={cn(
                  "absolute cursor-pointer transform-gpu",
                  autoRotate
                    ? "transition-none"
                    : "transition-transform duration-300 ease-out",
                )}
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  h-10 w-10 transform-gpu rounded-full flex items-center justify-center overflow-hidden
                  ${
                    hasImage
                      ? isExpanded
                        ? "bg-white ring-2 ring-white/30"
                        : isRelated
                        ? "bg-white/90 ring-2 ring-white/50"
                        : "bg-zinc-900 ring-1 ring-white/25"
                      : isExpanded
                      ? "bg-white text-black"
                      : isRelated
                      ? "bg-white/50 text-black"
                      : "bg-black text-white"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-white shadow-lg shadow-white/30"
                      : isRelated
                      ? "border-white animate-pulse"
                      : "border-white/40"
                  }
                  transition-all duration-500 ease-out
                  ${isExpanded ? "scale-[1.42] shadow-[0_0_28px_rgba(255,255,255,0.2)]" : ""}
                `}
                >
                  {hasImage && item.iconImage ? (
                    <Image
                      src={item.iconImage}
                      alt={item.iconAlt ?? item.title}
                      width={26}
                      height={26}
                      className="h-[26px] w-[26px] object-contain pointer-events-none select-none"
                    />
                  ) : Icon ? (
                    <Icon size={16} />
                  ) : null}
                </div>

                <div
                  className={`
                  absolute top-12 whitespace-nowrap
                  text-xs font-semibold tracking-wider
                  transform-gpu transition-all duration-500 ease-out
                  ${isExpanded ? "translate-y-1 scale-110 text-white" : "text-white/70"}
                `}
                >
                  {item.title}
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded ? (
                    <motion.div
                      initial={{ opacity: 0, y: -12, scale: 0.94 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 22,
                        mass: 0.9,
                      }}
                      className="absolute left-1/2 top-20 w-64 -translate-x-1/2 transform-gpu"
                    >
                      <Card className="overflow-visible border-white/30 bg-[#0a0a12]/95 shadow-[0_18px_48px_rgba(0,0,0,0.38)] shadow-white/10 backdrop-blur-xl">
                        <div className="absolute -top-3 left-1/2 h-3 w-px -translate-x-1/2 bg-white/50"></div>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <Badge
                              className={`px-2 text-xs ${getStatusStyles(
                                item.status
                              )}`}
                            >
                              {item.status === "completed"
                                ? dict.orbitalUI.statusCompleted
                                : item.status === "in-progress"
                                  ? dict.orbitalUI.statusInProgress
                                  : dict.orbitalUI.statusPending}
                            </Badge>
                            <span className="text-xs font-mono text-white/50">
                              {item.date}
                            </span>
                          </div>
                          <CardTitle className="mt-2 text-sm">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-xs text-white/80">
                          <p>{item.content}</p>

                          <div className="mt-4 border-t border-white/10 pt-3">
                            <div className="mb-1 flex items-center justify-between text-xs">
                              <span className="flex items-center">
                                <Zap size={10} className="mr-1" />
                                {dict.orbitalUI.energyLevel}
                              </span>
                              <span className="font-mono">{item.energy}%</span>
                            </div>
                            <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                              <motion.div
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${item.energy}%` }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                              />
                            </div>
                          </div>

                          {item.relatedIds.length > 0 && (
                            <div className="mt-4 border-t border-white/10 pt-3">
                              <div className="mb-2 flex items-center">
                                <LinkIcon size={10} className="mr-1 text-white/70" />
                                <h4 className="text-xs font-medium uppercase tracking-wider text-white/70">
                                  {dict.orbitalUI.connectedNodes}
                                </h4>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {item.relatedIds.map((relatedId) => {
                                  const relatedItem = timelineData.find(
                                    (i) => i.id === relatedId
                                  );
                                  return (
                                    <Button
                                      key={relatedId}
                                      variant="outline"
                                      size="sm"
                                      className="flex h-6 items-center rounded-none border-white/20 bg-transparent px-2 py-0 text-xs text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleItem(relatedId);
                                      }}
                                    >
                                      {relatedItem?.title}
                                      <ArrowRight
                                        size={8}
                                        className="ml-1 text-white/60"
                                      />
                                    </Button>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
