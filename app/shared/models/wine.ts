"use strict";

export interface IWine {
    id: number;
    name: string;
    vintage: number;
    colour: string;
    country: string;
    imageUrl?: string;
}