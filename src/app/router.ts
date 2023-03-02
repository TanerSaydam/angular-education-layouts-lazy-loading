import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        loadChildren: () => import("./components/layouts/layouts.module").then(m=> m.LayoutsModule)
    },
    {
        path: "login",
        loadChildren: ()=> import("./components/login/login.module").then(m=> m.LoginModule)
    }
]