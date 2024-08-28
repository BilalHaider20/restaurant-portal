import LayoutWrapper from "@/app/components/LayoutWrapper";

export default function Layout({ children, params }){
    return (
        <LayoutWrapper>{children}</LayoutWrapper>
    );
}