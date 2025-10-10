
import { Loader2 } from "lucide-react";
import React from 'react'

const Updated_Loader = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center overflow-hidden">
                <div className="text-center">
                    <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
                    <p className="text-muted-foreground">Loading...</p>
                </div>
            </div>

            <style jsx>{`
            /* For Webkit browsers (Chrome, Safari, Edge) */
::-webkit-scrollbar {
    display: none;
}

/* For Firefox */
html {
    scrollbar-width: none;
}

/* For IE and Edge Legacy */
body {
    -ms-overflow-style: none;
}
            `}</style>
        </>
    )
}

export default Updated_Loader