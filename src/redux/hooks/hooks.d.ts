import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "@redux/store";
export declare const useAppDispatch: () => AppDispatch;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
