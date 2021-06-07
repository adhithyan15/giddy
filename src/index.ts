import { GuidGeneratorFactory } from "./interfaces/GuidGeneratorFactory";
import { GuidGeneratorFactoryImpl } from "./implementations/GuidGeneratorFactoryImpl";

export function getGuidGeneratorFactory(): GuidGeneratorFactory {
    return new GuidGeneratorFactoryImpl();
}