'use client'

import { useState, useEffect } from 'react'
import { Menu, User, Briefcase, Code, Mail, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from '@/components/ui/sidebar'

export default function Vosidebar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const menuItems = [
    { text: 'Sobre mi', icon: User },
    { text: 'Proyectos', icon: Briefcase },
    { text: 'Tecnologías', icon: Code },
    { text: 'Contáctame', icon: Mail },
  ]

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background text-foreground">

        <Button
          variant="outline"
          size="icon"
          className="fixed top-4 left-4 z-50 bg-bg1 text-texto2 border-none hover:text-components1"
        >
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>

        <Sidebar>
          <SidebarHeader className="p-4">
            <h2 className="text-lg font-semibold">menu</h2>
          </SidebarHeader>

          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton className="w-full justify-start gap-2">
                    <item.icon className="h-4 w-4" />
                    {item.text}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter className="p-4">
            <div className="flex items-center justify-between">
              <span>Modo oscuro</span>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} className="ml-2" />
              {darkMode ? (
                <Moon className="h-4 w-4 ml-2" />
              ) : (
                <Sun className="h-4 w-4 ml-2" />
              )}
            </div>
          </SidebarFooter>
        </Sidebar>

      </div>
    </SidebarProvider>
  )
}
