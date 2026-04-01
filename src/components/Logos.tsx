const Logos: React.FC = () => {
    return (
        <section id="logos" className="py-32 px-5 bg-background">
            <p className="text-lg font-medium text-center">Trusted by <span className="text-secondary">200+</span> contractors nationwide</p>
            <div className="mt-5 w-full flex flex-wrap flex-row items-center justify-evenly gap-5 sm:gap-10 opacity-45 logos-container">
                {/* Synergy Fire & Safety */}
                <svg width="180" height="48" viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 md:h-10">
                    <text x="0" y="32" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="700" fill="black">SYNERGY</text>
                    <text x="0" y="46" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="400" fill="black" letterSpacing="1">FIRE &amp; SAFETY</text>
                </svg>

                {/* Infinity Fires */}
                <svg width="140" height="48" viewBox="0 0 140 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 md:h-10">
                    <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="600" fill="black">infinity</text>
                    <text x="0" y="44" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" fill="black">FIRES</text>
                </svg>

                {/* Blaze Guard Protection */}
                <svg width="160" height="48" viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 md:h-10">
                    <text x="0" y="26" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="700" fill="black">BLAZE GUARD</text>
                    <text x="0" y="42" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="400" fill="black" letterSpacing="2">PROTECTION SERVICES</text>
                </svg>

                {/* Apex Electrical */}
                <svg width="150" height="48" viewBox="0 0 150 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 md:h-10">
                    <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="700" fill="black">APEX</text>
                    <text x="0" y="45" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="400" fill="black">ELECTRICAL &amp; FIRE</text>
                </svg>

                {/* Phoenix Fire Systems */}
                <svg width="170" height="48" viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 md:h-10">
                    <text x="0" y="27" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="black">PHOENIX</text>
                    <text x="0" y="43" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="400" fill="black" letterSpacing="1.5">FIRE SYSTEMS</text>
                </svg>
            </div>
        </section>
    )
}

export default Logos
