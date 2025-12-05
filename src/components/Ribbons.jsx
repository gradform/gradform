const Ribbons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-100">
      {/* Left Ribbon */}
      <svg class="ribbon ribbon-left" viewBox="0 0 900 1000" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 0 C 200 80 150 180 300 250 S 700 450 650 600 C 600 750 300 900 0 1000" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0"/>
        <path d="M 10 0 C 180 100 170 200 320 270 S 720 470 670 620 C 620 770 320 920 10 1000" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0"/>
        <path d="M 20 0 C 160 120 190 220 340 290 S 740 490 690 640 C 640 790 340 940 20 1000" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0"/>
        <path d="M 30 0 C 140 140 210 240 360 310 S 760 510 710 710 C 660 860 360 1060 30 1000" stroke="rgba(255, 255, 255, 0.0)" strokeWidth="0"/>
        <path d="M 40 0 C 120 160 230 260 380 380 S 780 580 730 730 C 680 880 380 1080 40 1000" stroke="rgba(255, 255, 255, 0.0)" strokeWidth="0"/>
        <path d="M 50 0 C 100 200 250 300 400 400 S 800 600 750 750 C 700 900 400 1100 50 1000" stroke="rgba(255, 255, 255, 0.0)" strokeWidth="0"/>
        <path d="M 60 0 C 80 220 270 320 420 420 S 820 620 770 770 C 720 920 420 1120 60 1000" stroke="rgba(255, 255, 255, 0.0)" strokeWidth="0"/>
        <path d="M 70 0 C 60 240 290 340 440 440 S 840 640 790 790 C 740 940 440 1140 70 1000" stroke="rgba(255, 255, 255, 0.0)" strokeWidth="0"/>
      </svg>

      {/* Right Ribbon */}
      <svg class="ribbon ribbon-right" viewBox="0 0 900 1000" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 0 C 200 100 150 200 300 300 S 700 500 650 650 C 600 800 300 1000 0 1000" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.5"/>
        <path d="M 10 0 C 180 120 170 220 320 320 S 720 520 670 670 C 620 820 320 1020 10 1000" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.5"/>
        <path d="M 20 0 C 160 140 190 240 340 340 S 740 540 690 690 C 640 840 340 1040 20 1000" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5"/>
        <path d="M 30 0 C 140 160 210 260 360 360 S 760 560 710 710 C 660 860 360 1060 30 1000" stroke="rgba(255, 255, 255, 0.0)" strokeWidth="0.5"/>
        <path d="M 40 0 C 120 180 230 280 380 380 S 780 580 730 730 C 680 880 380 1080 40 1000" stroke="rgba(255, 255, 255, 0.0)" strokeWidth="0"/>
        <path d="M 50 0 C 100 200 250 300 400 400 S 800 600 750 750 C 700 900 400 1100 50 1000" stroke="rgba(255, 255, 255, 0.0)" strokeWidth="0"/>
        <path d="M 60 0 C 80 220 270 320 420 420 S 820 620 770 770 C 720 920 420 1120 60 1000" stroke="rgba(255, 255, 255, 0.0)" strokeWidth="0"/>
        <path d="M 70 0 C 60 240 290 340 440 440 S 840 640 790 790 C 740 940 440 1140 70 1000" stroke="rgba(255, 255, 255, 0.0)" strokeWidth="0"/>
      </svg>
    </div>
  );
};

export default Ribbons;
