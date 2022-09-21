/// <reference types="react" />
import { TabViewProps } from '@rneui/base/dist/TabView/TabView';
import { TabViewItemProps } from '@rneui/base/dist/TabView/TabView.Item';
export type { TabViewProps, TabViewItemProps };
declare const _default: (import("react").FunctionComponent<TabViewProps & {
    theme?: import("@rneui/base").Theme;
    children?: import("react").ReactNode;
}> | import("react").ForwardRefExoticComponent<TabViewProps & {
    theme?: import("@rneui/base").Theme;
    children?: import("react").ReactNode;
}>) & {
    Item: import("react").FunctionComponent<TabViewItemProps> | import("react").ForwardRefExoticComponent<TabViewItemProps>;
};
export default _default;
