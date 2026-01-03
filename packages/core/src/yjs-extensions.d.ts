import * as Y from "yjs";

declare module "yjs" {
  interface AbstractType<EventType> {
    _implicitObserver?: any;
  }
}
