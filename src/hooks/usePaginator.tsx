import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "query-string";

export function usePaginator() {
  const location = useLocation();
  const navigate = useNavigate();
  const [page, setPage] = useState(initializePageFromUrl() ?? 1);

  function initializePageFromUrl() {
    const initialPage = qs.parse(location.search)["page"];
    if (initialPage) return Number(initialPage);
  }

  function updateUrlPage() {
    navigate({
      search: qs.stringify({ page: page })
    });
  }

  useEffect(() => {
    updateUrlPage();
  }, [page]);

  return { page, setPage };
}
