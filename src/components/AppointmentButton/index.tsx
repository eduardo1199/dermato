interface AppointmentButtonProps {
  title: string
}

export function AppointmentButton({ title }: AppointmentButtonProps) {
  return (
    <button type="button" className="w-[263px] h-[60px] rounded-md bg-c8 flex items-center justify-center hover:brightness-90 transition-all">
      <span className="font-bold text-xl text-c1">
        {title}
      </span>
    </button>
  )
}