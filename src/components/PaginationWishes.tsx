interface PaginationWishes {
  pageLinks: Array<{ active: boolean; label: string; url: string }>;
  getWish: (index: number) => 1 | undefined;
}

export default function PaginationWishes({
  pageLinks,
  getWish,
}: PaginationWishes) {
  return (
    <div className='flex w-full justify-center items-center text-base text-primary gap-1'>
      {pageLinks.map((pageLink, index) => (
        <button
          key={pageLink.label}
          dangerouslySetInnerHTML={{ __html: pageLink.label }}
          className={`py-2 disabled:hidden  px-3 hover:text-white ${
            pageLink.active ? 'bg-opacity-80 text-white' : 'bg-opacity-10'
          } rounded-lg font-poppins bg-gray-300 hover:bg-opacity-100`}
          onClick={() => getWish(index)}
          disabled={pageLink.url === null}></button>
      ))}
    </div>
  );
}
