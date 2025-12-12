'use client';

export default function HeroBadge() {
  return (
    <div 
      className="relative inline-flex rounded-full p-[1px]"
      style={{
        background: 'linear-gradient(90deg, rgb(105, 51, 0) 0%, rgb(128, 30, 0) 33%, rgb(0, 0, 0) 54%, rgb(0, 105, 166) 100%)'
      }}
    >
      <div className="rounded-full bg-black px-4 py-1.5">
        <p className="text-sm font-medium text-white">
          Establish. Empower. Excel.
        </p>
      </div>
    </div>
  );
}
