interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-red-800">
      {message}
    </p>
  );
}
