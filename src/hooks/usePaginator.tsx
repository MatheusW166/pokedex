import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "query-string";

export function usePaginator() {
  const location = useLocation();
  const navigate = useNavigate();
  const [page, setPage] = useState<number>();

  function getPageFromUrl() {
    const urlParams = new URLSearchParams(location.search);
    const page = Number(urlParams.get("page"));
    if (!isNaN(page)) {
      setPage(page);
    }
  }

  function updateUrlPage() {
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("page", `${page}`);
    navigate({});
  }

  useEffect(() => {
    getPageFromUrl();
  }, []);
}
