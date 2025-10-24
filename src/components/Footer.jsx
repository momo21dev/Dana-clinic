export default function Footer() {
    return (
        <footer className="bg-black text-white text-center py-4 mt-10">
            <p className="text-sm md:text-base">
                © {new Date().getFullYear()} Dana Clinic — Developed by Mohamed Mostafa 
            </p>
        </footer>
    );
}
