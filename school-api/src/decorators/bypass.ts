import { SetMetadata } from "@nestjs/common";

export const BY_PASS_KEY = Symbol('BY_PASS_KEY');
export const ByPass = () => SetMetadata(BY_PASS_KEY, true);