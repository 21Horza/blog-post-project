// <Page adress, scroll position>
export type ScrollSchema = Record<string, number>;

export interface ScrollSafeSchema {
    scroll: ScrollSchema;
}
