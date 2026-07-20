"use client"

import { Github, Instagram, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"

const YEAR = new Date().getFullYear()

export default function Footers01() {
  return (
    <footer className="pt-10 pb-6 sm:pt-16 sm:pb-8 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between md:gap-x-10 md:text-left">
          <p className="text-foreground text-xs sm:text-sm font-medium order-2 md:order-1">
            All rights reserved. Copyright &copy; {YEAR} Made by ❤️
          </p>
          <div className="flex flex-wrap justify-center gap-1 order-1 md:order-2">
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
              <a href="#" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
              <a href="#" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
              <a href="#" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
              <a href="https://github.com/abints47" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}