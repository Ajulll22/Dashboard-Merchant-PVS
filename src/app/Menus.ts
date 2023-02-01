export type SubMenuType = {
    subTitle: string
    path: string
    active?: boolean
}

export type MenuType = {
    title: string
    path:string
    src: string
    gap?: boolean
    sub?: SubMenuType[]
}

const Menus: MenuType[] = [
    { title: "Dashboard", path: "/dashboard", src: "icn-dashboard" },
    { title: "Component", path: "/dashboard/component", src: "Chat" },
    { title: "Responsive ", path: "/dashboard/responsive", src: "Calendar", gap: true },
    { title: "Map", path: "/dashboard/map", src: "Search" },
    { title: "Analytics", path: "/dashboard", src: "Chart" },
    {
        title: "User Management",
        path:"#",
        src: "User",
        gap: true,
        sub: [
            {
                subTitle: "User",
                path: "/user",
                active: true
            }, {
                subTitle: "Group",
                path: "/group"
            }, {
                subTitle: "Sub Group",
                path: "/sub-group"
            }
        ]
    },
    {
        title: "Config",
        path:"#",
        src: "Setting",
        sub: [
            {
                subTitle: "Features",
                path: "/features"
            }
        ]
    },
    {
        title: "Approval",
        path:"#",
        src: "icn-approval",
        sub: [
            {
                subTitle: "User",
                path: "/user"
            }, {
                subTitle: "Group",
                path: "/group"
            }, {
                subTitle: "Sub Group",
                path: "/sub-group"
            }
        ]
    }
]

export { Menus }