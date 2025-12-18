import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const CanvasRevealEffect = ({
    animationSpeed = 0.4,
    opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
    colors = [[0, 255, 255]],
    containerClassName,
    dotSize,
    showGradient = true,
}) => {
    return (
        <div className={cn("h-full relative bg-white w-full", containerClassName)}>
            <div className="h-full w-full">
                <DotMatrix
                    colors={colors}
                    dotSize={dotSize}
                    opacities={opacities}
                    shader={`
              float animation_speed_factor = ${animationSpeed.toFixed(1)};
              float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2);
              return step(
                0.0,
                sin(
                  t * animation_speed_factor +
                  intro_offset * intro_offset * 4.0 +
                  rand(st2) * 10.0
                )
              );
            `}
                    center={["x", "y"]}
                />
            </div>
            {showGradient && (
                <div className="absolute inset-0 bg-gradient-to-t from-white to-[84%]" />
            )}
        </div>
    );
};

const DotMatrix = ({
    colors = [[0, 0, 0]],
    opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
    totalSize = 4,
    dotSize = 2,
    shader = "",
    center = ["x", "y"],
}) => {
    const uniforms = React.useMemo(() => {
        let colorsArray = [
            colors[0],
            colors[0],
            colors[0],
            colors[0],
            colors[0],
            colors[0],
        ];
        if (colors.length === 2) {
            colorsArray = [
                colors[0],
                colors[0],
                colors[0],
                colors[1],
                colors[1],
                colors[1],
            ];
        } else if (colors.length === 3) {
            colorsArray = [
                colors[0],
                colors[0],
                colors[1],
                colors[1],
                colors[2],
                colors[2],
            ];
        }

        return {
            u_colors: {
                value: colorsArray.map((color) => [
                    color[0] / 255,
                    color[1] / 255,
                    color[2] / 255,
                ]),
                type: "uniform3fv",
            },
            u_opacities: {
                value: opacities,
                type: "uniform1fv",
            },
            u_total_size: {
                value: totalSize,
                type: "uniform1f",
            },
            u_dot_size: {
                value: dotSize,
                type: "uniform1f",
            },
        };
    }, [colors, opacities, totalSize, dotSize]);

    return (
        <Shader
            source={`
        precision mediump float;
        in vec2 fragCoord;

        uniform float u_time;
        uniform float u_opacities[10];
        uniform vec3 u_colors[6];
        uniform float u_total_size;
        uniform float u_dot_size;
        uniform vec2 u_resolution;

        out vec4 fragColor;

        float PHI = 1.61803398874989484820459;

        float random(vec2 xy) {
            return fract(tan(distance(xy * PHI, xy) * 0.5) * xy.x);
        }

        float map(float value, float min1, float max1, float min2, float max2) {
            return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
        }

        void main() {
            vec2 st = fragCoord.xy;
            ${center.includes("x")
                    ? "st.x -= abs(u_resolution.x / 2.0 - u_total_size / 2.0);"
                    : ""
                }
            ${center.includes("y")
                    ? "st.y -= abs(u_resolution.y / 2.0 - u_total_size / 2.0);"
                    : ""
                }
            float x = floor(st.x / u_total_size);
            float y = floor(st.y / u_total_size);

            vec2 st2 = vec2(x, y);

            float opacity = step(0.0, random(st2));
            float colorIndex = floor(random(st2) * 6.0);

            float t = u_time;
            ${shader}

            vec3 color = u_colors[int(colorIndex)];

            float opacity_sum = 0.0;
            for (int i = 0; i < 10; i++) {
                 opacity_sum += u_opacities[i];
            }
            // Simplified opacity logic for stability
            float final_opacity = u_opacities[int(map(random(st2), 0.0, 1.0, 0.0, 9.0))];

            fragColor = vec4(color, final_opacity);
            fragColor.rgb *= fragColor.a;
        }
      `}
            uniforms={uniforms}
            maxFps={60}
        />
    );
};

const Shader = ({ source, uniforms, maxFps = 60 }) => {
    return (
        <div className="absolute inset-0 h-full w-full bg-transparent">
            {/* Placeholder for actual WebGL shader implementation. 
            For this environment, we'll simulate the visual effect with CSS/SVG to avoid complex WebGL setup issues.
        */}
            <div className="absolute inset-0 bg-black/90 z-0"></div>
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}></div>
        </div>
    );
};
