"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
    let rotationTimer: ReturnType<typeof setInterval>;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.45) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
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
  const TELEGRAM_GLOW_SIZE = 520;
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
        "relative flex h-[min(720px,85vh)] w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-black/10 backdrop-blur-md",
        className
      )}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      {/* Background image behind the orbit animation */}
      <div
        className="pointer-events-none absolute inset-0 z-[0] opacity-100 [filter:brightness(1.2)_saturate(1.35)_contrast(1.2)]"
        style={{
          backgroundImage: "url('/assets/orbitarka.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "50% 35%",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[0] bg-gradient-to-b from-black/5 via-transparent to-black/8"
        aria-hidden
      />

      <div className="relative z-[1] w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {telegramPosition && shouldShowTelegramFill && (
            <div
              aria-hidden
              className="pointer-events-none absolute rounded-full blur-2xl opacity-90"
              style={{
                width: TELEGRAM_GLOW_SIZE,
                height: TELEGRAM_GLOW_SIZE,
                // Center the glow on the telegram node (nodes use translate(x,y) from the same origin).
                transform: `translate(${telegramPosition.x - TELEGRAM_GLOW_SIZE / 2}px, ${
                  telegramPosition.y - TELEGRAM_GLOW_SIZE / 2
                }px)`,
                background:
                  "radial-gradient(circle at center, rgba(34,211,238,0.65) 0%, rgba(160,32,240,0.26) 35%, rgba(255,105,180,0.14) 60%, transparent 72%)",
                zIndex: 60,
              }}
            />
          )}

          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-70"></div>
            <div
              className="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md"></div>
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

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => {
                  nodeRefs.current[item.id] = el;
                }}
                className={cn(
                  "absolute cursor-pointer",
                  autoRotate
                    ? "transition-none"
                    : "transition-transform duration-200",
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
                  w-10 h-10 rounded-full flex items-center justify-center overflow-hidden
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
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-150" : ""}
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
                  absolute top-12  whitespace-nowrap
                  text-xs font-semibold tracking-wider
                  transition-all duration-300
                  ${isExpanded ? "text-white scale-125" : "text-white/70"}
                `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-black/90 backdrop-blur-lg border-white/30 shadow-xl shadow-white/10 overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50"></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
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
                      <CardTitle className="text-sm mt-2">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-white/80">
                      <p>{item.content}</p>

                      <div className="mt-4 pt-3 border-t border-white/10">
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="flex items-center">
                            <Zap size={10} className="mr-1" />
                              {dict.orbitalUI.energyLevel}
                          </span>
                          <span className="font-mono">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                            style={{ width: `${item.energy}%` }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-white/10">
                          <div className="flex items-center mb-2">
                            <LinkIcon size={10} className="text-white/70 mr-1" />
                            <h4 className="text-xs uppercase tracking-wider font-medium text-white/70">
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
                                  className="flex items-center h-6 px-2 py-0 text-xs rounded-none border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white transition-all"
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
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
