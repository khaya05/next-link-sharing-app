import AuthForm from './components/AuthForm_copy';

export default function LoginPage() {
  return (
    <main
      className="
        h-full
        p-4
        md:p-0
        md:grid
        md:place-items-center
        md:bg-light-gray
      "
    >
      <AuthForm />
    </main>
  );
}
