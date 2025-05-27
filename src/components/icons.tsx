// src/icons.tsx
import { Utensils, Bus, Volleyball, Pill, GraduationCap } from "lucide-react";
import type { FC, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export const UtensilsIcon: FC<IconProps> = (props) => <Utensils {...props} />;
export const BusIcon: FC<IconProps> = (props) => <Bus {...props} />;
export const VolleyballIcon: FC<IconProps> = (props) => <Volleyball {...props} />;
export const PillIcon: FC<IconProps> = (props) => <Pill {...props} />;
export const GraduationCapIcon: FC<IconProps> = (props) => <GraduationCap {...props} />;
