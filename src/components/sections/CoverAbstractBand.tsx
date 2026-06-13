import React from "react";

interface Props {
  abstract: string;
}

export function CoverAbstractBand({ abstract }: Props) {
  return (
    <section className="bg-ash border-y border-smoke py-14">
      <div className="container">
        <div className="max-w-[700px] mx-auto pl-8 sm:pl-10 border-l-[3px] border-signal">
          <p className="font-body text-[16px] sm:text-[17px] text-paper leading-[1.85]">
            {abstract}
          </p>
        </div>
      </div>
    </section>
  );
}
