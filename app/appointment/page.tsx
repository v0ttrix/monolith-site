"use client";

import { useState, FormEvent } from "react";
import { Button, FormField, Section, PageHero } from "@/components/ui";
import RevealGroup from "@/components/RevealGroup";

const monthNames = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const timeOptions = [
  "9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM",
  "1:00 PM","1:30 PM","2:00 PM","2:30 PM","3:00 PM","3:30 PM","4:00 PM","4:30 PM"
];

export default function AppointmentPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  function prevMonth() {
    setCurrentDate(new Date(year, month - 1, 1));
  }
  function nextMonth() {
    setCurrentDate(new Date(year, month + 1, 1));
  }

  function selectDate(date: Date) {
    setSelectedDate(date);
    setSelectedTime(null);
  }

  function isAvailable(time: string) {
    if (!selectedDate) return false;
    const seed = selectedDate.getDate() + timeOptions.indexOf(time);
    return seed % 5 !== 0;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;
    setShowModal(true);
  }

  const dateLabel = selectedDate
    ? selectedDate.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })
    : "Choose a date first";

  return (
    <main>
      <PageHero
        eyebrow="Schedule a Meeting"
        title={<>Book Your <span className="text-accent-bright italic">Consultation</span></>}
        subtitle="Select a date and time that works for you. Our team will confirm your appointment within 24 hours."
        image="/images/appointment-hero.jpg"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Calendar */}
          <div className="lg:col-span-7">
            <div className="bg-white shadow-sm border border-muted-light/30 p-6 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <button onClick={prevMonth} className="w-10 h-10 flex items-center justify-center hover:bg-sand transition-colors" aria-label="Previous month">
                  <span className="material-symbols-outlined" aria-hidden="true">chevron_left</span>
                </button>
                <h2 className="font-display text-heading-sm text-brand">{monthNames[month]} {year}</h2>
                <button onClick={nextMonth} className="w-10 h-10 flex items-center justify-center hover:bg-sand transition-colors" aria-label="Next month">
                  <span className="material-symbols-outlined" aria-hidden="true">chevron_right</span>
                </button>
              </div>

              {/* Day labels */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
                  <div key={d} className="text-center text-[10px] uppercase tracking-widest text-slate py-2">{d}</div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-2" aria-label="Calendar">
                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square" />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const cellDate = new Date(year, month, day);
                  const isPast = cellDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                  const isWeekend = cellDate.getDay() === 0 || cellDate.getDay() === 6;
                  const isToday = cellDate.toDateString() === today.toDateString();
                  const isSelected = selectedDate?.toDateString() === cellDate.toDateString();
                  const disabled = isPast || isWeekend;

                  return (
                    <button
                      key={day}
                      type="button"
                      disabled={disabled}
                      onClick={() => selectDate(cellDate)}
                      className={`aspect-square flex items-center justify-center text-sm transition-all
                        ${disabled ? "text-muted-light opacity-40 cursor-not-allowed" : ""}
                        ${isSelected ? "bg-accent text-white" : ""}
                        ${isToday && !isSelected ? "border-2 border-accent" : ""}
                        ${!disabled && !isSelected ? "hover:bg-accent hover:text-white cursor-pointer" : ""}
                      `}
                      aria-label={disabled ? undefined : `${monthNames[month]} ${day}, ${year}`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Time + Form */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white shadow-sm border border-muted-light/30 p-6 md:p-8">
              <h3 className="font-display text-heading-sm mb-2">Select a Time</h3>
              <p className="text-sm text-slate mb-6">{dateLabel}</p>
              {selectedDate ? (
                <div className="grid grid-cols-2 gap-3" aria-label="Available time slots">
                  {timeOptions.map((time) => {
                    const available = isAvailable(time);
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        disabled={!available}
                        onClick={() => setSelectedTime(time)}
                        className={`border px-4 py-3 text-center text-sm transition-all
                          ${isSelected ? "bg-accent text-white border-accent" : ""}
                          ${available && !isSelected ? "border-muted-light text-charcoal hover:bg-accent hover:text-white hover:border-accent" : ""}
                          ${!available ? "border-muted-light/30 opacity-30 line-through cursor-not-allowed" : ""}
                        `}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center text-slate text-sm py-8">Select a date to see available times</div>
              )}
            </div>

            <div className="bg-white shadow-sm border border-muted-light/30 p-6 md:p-8">
              <h3 className="font-display text-heading-sm mb-6">Your Details</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <FormField label="Full Name" id="fullName" required placeholder="Enter your name" />
                <FormField label="Email" id="email" type="email" required placeholder="you@example.com" />
                <FormField label="Phone" id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                <FormField label="Consultation Type" id="consultType" type="select" required>
                  <option value="">Select a service</option>
                  <option value="acquisition">Strategic Acquisition Review</option>
                  <option value="renovation">Renovation Consultation</option>
                  <option value="portfolio">Portfolio Assessment</option>
                  <option value="general">General Inquiry</option>
                </FormField>
                <FormField label="Notes (Optional)" id="notes" type="textarea" rows={3} placeholder="Tell us about your project..." />
                <Button type="submit" variant="dark" disabled={!selectedDate || !selectedTime} className="w-full">
                  Confirm Booking
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/60 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="bg-bone p-12 max-w-md mx-4 text-center shadow-lg">
            <span className="material-symbols-outlined text-[64px] text-accent mb-6" aria-hidden="true">check_circle</span>
            <h3 className="font-display text-heading-sm mb-4">Booking Confirmed</h3>
            <p className="text-slate mb-8">
              Your consultation is booked for {dateLabel} at {selectedTime}. We&apos;ll send a confirmation to your email shortly.
            </p>
            <Button variant="dark" onClick={() => setShowModal(false)}>Done</Button>
          </div>
        </div>
      )}
    </main>
  );
}
