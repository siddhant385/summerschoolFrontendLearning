const Footer = () => {
  return (
    <footer className="py-10 border-t">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm font-medium">
          <a href="#" className="hover:text-primary">Terms</a>
          <a href="#" className="hover:text-primary">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
