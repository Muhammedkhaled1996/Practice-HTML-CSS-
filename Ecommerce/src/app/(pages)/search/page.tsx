import AppBreadcrumb from '@/src/component/publicComponents/AppBreadcrumb/AppBreadcrumb'
import React from 'react'

export default function page() {
  return <>
  <div className="container mx-auto px-4 py-2">
   
    <div className="mt-4">
                <AppBreadcrumb
                  items={[{ label: "Home", href: "/" }]}
                  current="Search Results"
                  linkClassName="hover:text-black text-gray-500 text-sm"
                  itemClassName=""
                  currentClassName="text-black text-sm"
                  separatorClassName="text-gray-500"
                />
              </div>
    </div>
  </>
}
