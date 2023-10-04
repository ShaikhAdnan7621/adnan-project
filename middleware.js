import { NextResponse } from 'next/server'
import Jwt from 'jsonwebtoken';

export function middleware(request) {
    const path = request.nextUrl.pathname
    const ispublicpath = path === '/Login' || path === '/Signup'
    const adminpath = path === '/Admin' 
    const managerpath = path === '/Manager' || path === '/Editadmin' 
    const token = request.cookies.get("token")?.value || "";
    const admintoken = request.cookies.get("admintoken")?.value || "";
    const managertoken = request.cookies.get("managertoken")?.value || "";

    if (adminpath && !admintoken) {
        return NextResponse.redirect(new URL("/Restricted", request.nextUrl))
    }
    if (managerpath && !managertoken) {
        return NextResponse.redirect(new URL("/Restricted", request.nextUrl))
    }
    
    if (ispublicpath && token) {
        return NextResponse.redirect(new URL("/", request.nextUrl))
    }

    if (!ispublicpath && !token) {
        return NextResponse.redirect(new URL("/Login", request.nextUrl))
    }
}

export const config = {
    matcher: [
        '/',
        '/Profile',
        '/Login',
        '/Signup',
        '/Product',
        '/Admin',
        '/Manager',
        '/Editadmin',
    ],
}