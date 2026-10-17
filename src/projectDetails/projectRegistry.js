import { lazy } from "react";
import { PROJECT_META_BY_SLUG } from "../data/projectMeta";

const PROJECT_DETAIL_COMPONENTS = {
  vidnote: lazy(() => import("./VidNoteDetail")),
  sentimenid: lazy(() => import("./SentimenIdDetail")),
  trashclassifier: lazy(() => import("./TrashClassifierDetail")),
  pinjemin: lazy(() => import("./PinjeminDetail")),
  tutorin: lazy(() => import("./TutorinDetail")),
};

export function getProjectRouteConfig(slug) {
  const metadata = PROJECT_META_BY_SLUG[slug];
  if (!metadata) return null;

  return {
    ...metadata,
    Component: PROJECT_DETAIL_COMPONENTS[slug],
  };
}