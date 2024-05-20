// @ts-nocheck
// This file is autogenerated by scripts/registry-builder.ts
// Do not edit this file directly.
import * as React from "react"

export const Index: Record<string, any> = {
    "default": {
      "tree-view": {
        name: "tree-view",
        type: "components:extension",
        registryDependencies: undefined,
        component: React.lazy(() => import("@/registry/default/extension/tree-view.tsx")),
        files: ["/registry/default/extension/tree-view.tsx"],
      },
      "tree-view-api": {
        name: "tree-view-api",
        type: "components:extension",
        registryDependencies: undefined,
        component: React.lazy(() => import("@/registry/default/extension/tree-view-api.tsx")),
        files: ["/registry/default/extension/tree-view-api.tsx"],
      },
      "file-upload": {
        name: "file-upload",
        type: "components:extension",
        registryDependencies: undefined,
        component: React.lazy(() => import("@/registry/default/extension/file-upload.tsx")),
        files: ["/registry/default/extension/file-upload.tsx"],
      },
      "multi-select": {
        name: "multi-select",
        type: "components:extension",
        registryDependencies: undefined,
        component: React.lazy(() => import("@/registry/default/extension/multi-select.tsx")),
        files: ["/registry/default/extension/multi-select.tsx"],
      },
      "otp-input": {
        name: "otp-input",
        type: "components:extension",
        registryDependencies: undefined,
        component: React.lazy(() => import("@/registry/default/extension/otp-input.tsx")),
        files: ["/registry/default/extension/otp-input.tsx"],
      },
      "carousel": {
        name: "carousel",
        type: "components:extension",
        registryDependencies: undefined,
        component: React.lazy(() => import("@/registry/default/extension/carousel.tsx")),
        files: ["/registry/default/extension/carousel.tsx"],
      },
      "breadcrumb": {
        name: "breadcrumb",
        type: "components:extension",
        registryDependencies: undefined,
        component: React.lazy(() => import("@/registry/default/extension/breadcrumb.tsx")),
        files: ["/registry/default/extension/breadcrumb.tsx"],
      },
      "image-carousel-upload": {
        name: "image-carousel-upload",
        type: "components:extension",
        registryDependencies: undefined,
        component: React.lazy(() => import("@/registry/default/extension/image-carousel-upload.tsx")),
        files: ["/registry/default/extension/image-carousel-upload.tsx"],
      },
      "tree-view-demo": {
        name: "tree-view-demo",
        type: "components:demo",
        registryDependencies: ["tree-view-api"],
        component: React.lazy(() => import("@/registry/default/example/tree-view-demo.tsx")),
        files: ["/registry/default/example/tree-view-demo.tsx"],
      },
      "file-upload-demo": {
        name: "file-upload-demo",
        type: "components:demo",
        registryDependencies: ["file-upload"],
        component: React.lazy(() => import("@/registry/default/example/file-upload-demo.tsx")),
        files: ["/registry/default/example/file-upload-demo.tsx"],
      },
      "multi-select-demo": {
        name: "multi-select-demo",
        type: "components:demo",
        registryDependencies: ["multi-select"],
        component: React.lazy(() => import("@/registry/default/example/multi-select-demo.tsx")),
        files: ["/registry/default/example/multi-select-demo.tsx"],
      },
      "otp-input-demo": {
        name: "otp-input-demo",
        type: "components:demo",
        registryDependencies: ["otp-input"],
        component: React.lazy(() => import("@/registry/default/example/otp-input-demo.tsx")),
        files: ["/registry/default/example/otp-input-demo.tsx"],
      },
      "carousel-demo": {
        name: "carousel-demo",
        type: "components:demo",
        registryDependencies: ["carousel"],
        component: React.lazy(() => import("@/registry/default/example/carousel-demo.tsx")),
        files: ["/registry/default/example/carousel-demo.tsx"],
      },
      "breadcrumb-demo": {
        name: "breadcrumb-demo",
        type: "components:demo",
        registryDependencies: ["breadcrumb"],
        component: React.lazy(() => import("@/registry/default/example/breadcrumb-demo.tsx")),
        files: ["/registry/default/example/breadcrumb-demo.tsx"],
      },
      "tree-view-builtin-indicator": {
        name: "tree-view-builtin-indicator",
        type: "components:example",
        registryDependencies: ["tree-view"],
        component: React.lazy(() => import("@/registry/default/example/tree-view/tree-view-builtin-indicator.tsx")),
        files: ["/registry/default/example/tree-view/tree-view-builtin-indicator.tsx"],
      },
      "tree-view-builtin-expand": {
        name: "tree-view-builtin-expand",
        type: "components:example",
        registryDependencies: ["tree-view"],
        component: React.lazy(() => import("@/registry/default/example/tree-view/tree-view-builtin-expand.tsx")),
        files: ["/registry/default/example/tree-view/tree-view-builtin-expand.tsx"],
      },
      "tree-view-builtin-select": {
        name: "tree-view-builtin-select",
        type: "components:example",
        registryDependencies: ["tree-view"],
        component: React.lazy(() => import("@/registry/default/example/tree-view/tree-view-builtin-select.tsx")),
        files: ["/registry/default/example/tree-view/tree-view-builtin-select.tsx"],
      },
      "tree-view-guide": {
        name: "tree-view-guide",
        type: "components:example",
        registryDependencies: ["tree-view-api"],
        component: React.lazy(() => import("@/registry/default/example/tree-view/tree-view-guide.tsx")),
        files: ["/registry/default/example/tree-view/tree-view-guide.tsx"],
      },
      "carousel-orientation": {
        name: "carousel-orientation",
        type: "components:example",
        registryDependencies: ["carousel"],
        component: React.lazy(() => import("@/registry/default/example/carousel/carousel-orientation.tsx")),
        files: ["/registry/default/example/carousel/carousel-orientation.tsx"],
      },
      "carousel-plugin": {
        name: "carousel-plugin",
        type: "components:example",
        registryDependencies: ["carousel"],
        component: React.lazy(() => import("@/registry/default/example/carousel/carousel-plugin.tsx")),
        files: ["/registry/default/example/carousel/carousel-plugin.tsx"],
      },
      "carousel-indicator": {
        name: "carousel-indicator",
        type: "components:example",
        registryDependencies: ["carousel"],
        component: React.lazy(() => import("@/registry/default/example/carousel/carousel-indicator.tsx")),
        files: ["/registry/default/example/carousel/carousel-indicator.tsx"],
      },
      "carousel-rtl-support": {
        name: "carousel-rtl-support",
        type: "components:example",
        registryDependencies: ["carousel"],
        component: React.lazy(() => import("@/registry/default/example/carousel/carousel-rtl-support.tsx")),
        files: ["/registry/default/example/carousel/carousel-rtl-support.tsx"],
      },
      "multi-select-state": {
        name: "multi-select-state",
        type: "components:example",
        registryDependencies: ["multi-select"],
        component: React.lazy(() => import("@/registry/default/example/multi-select/multi-select-state.tsx")),
        files: ["/registry/default/example/multi-select/multi-select-state.tsx"],
      },
      "multi-select-zod": {
        name: "multi-select-zod",
        type: "components:example",
        registryDependencies: ["multi-select"],
        component: React.lazy(() => import("@/registry/default/example/multi-select/multi-select-zod.tsx")),
        files: ["/registry/default/example/multi-select/multi-select-zod.tsx"],
      },
      "otp-input-zod": {
        name: "otp-input-zod",
        type: "components:example",
        registryDependencies: ["otp-input"],
        component: React.lazy(() => import("@/registry/default/example/otp-input/otp-input-zod.tsx")),
        files: ["/registry/default/example/otp-input/otp-input-zod.tsx"],
      },
      "file-upload-dropzone": {
        name: "file-upload-dropzone",
        type: "components:example",
        registryDependencies: ["file-upload"],
        component: React.lazy(() => import("@/registry/default/example/file-upload/file-upload-dropzone.tsx")),
        files: ["/registry/default/example/file-upload/file-upload-dropzone.tsx"],
      },
      "file-upload-zod": {
        name: "file-upload-zod",
        type: "components:example",
        registryDependencies: ["file-upload"],
        component: React.lazy(() => import("@/registry/default/example/file-upload/file-upload-zod.tsx")),
        files: ["/registry/default/example/file-upload/file-upload-zod.tsx"],
      },
      "breadcrumb-separator": {
        name: "breadcrumb-separator",
        type: "components:example",
        registryDependencies: ["breadcrumb"],
        component: React.lazy(() => import("@/registry/default/example/breadcrumb/breadcrumb-separator.tsx")),
        files: ["/registry/default/example/breadcrumb/breadcrumb-separator.tsx"],
      },
      "breadcrumb-variants": {
        name: "breadcrumb-variants",
        type: "components:example",
        registryDependencies: ["breadcrumb"],
        component: React.lazy(() => import("@/registry/default/example/breadcrumb/breadcrumb-variants.tsx")),
        files: ["/registry/default/example/breadcrumb/breadcrumb-variants.tsx"],
      },
      "breadcrumb-popover": {
        name: "breadcrumb-popover",
        type: "components:example",
        registryDependencies: ["breadcrumb"],
        component: React.lazy(() => import("@/registry/default/example/breadcrumb/breadcrumb-popover.tsx")),
        files: ["/registry/default/example/breadcrumb/breadcrumb-popover.tsx"],
      },
      "breadcrumb-active": {
        name: "breadcrumb-active",
        type: "components:example",
        registryDependencies: ["breadcrumb"],
        component: React.lazy(() => import("@/registry/default/example/breadcrumb/breadcrumb-active.tsx")),
        files: ["/registry/default/example/breadcrumb/breadcrumb-active.tsx"],
      },
      "breadcrumb-orientation": {
        name: "breadcrumb-orientation",
        type: "components:example",
        registryDependencies: ["breadcrumb"],
        component: React.lazy(() => import("@/registry/default/example/breadcrumb/breadcrumb-orientation.tsx")),
        files: ["/registry/default/example/breadcrumb/breadcrumb-orientation.tsx"],
      },
      "image-carousel-upload-example": {
        name: "image-carousel-upload-example",
        type: "components:example",
        registryDependencies: ["image-carousel-upload"],
        component: React.lazy(() => import("@/registry/default/example/image-carousel-upload-example.tsx")),
        files: ["/registry/default/example/image-carousel-upload-example.tsx"],
      },
    },
  }
  