import type { ReactNode } from "react";

type Router_Type = {
    path?: string;
    element?: ReactNode;
    children?: Router_Type; // récursif
}[];

export type { Router_Type };
