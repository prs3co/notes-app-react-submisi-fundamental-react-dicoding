import React from "react";

function NotFoundPage() {
  return (
    <div className="text-center flex h-96">
      <div className="m-auto">
        <div className="py-3 mb-6">
          <h1 className="text-9xl font-bold">Ooops !</h1>
        </div>
        <div className="py-3">
          <h2 className="text-5xl font-bold">404 - Halaman tidak ditemukan</h2>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;