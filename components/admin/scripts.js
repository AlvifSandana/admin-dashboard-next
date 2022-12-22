import Script from "next/script";

export default function Scripts(){
  return (
    <>
      <Script defer src="/assets/modules/jquery.min.js" />
      <Script defer src="/assets/modules/popper.js" />
      <Script defer src="/assets/modules/tooltip.js" />
      <Script defer src="/assets/modules/bootstrap/js/bootstrap.min.js" />
      <Script defer src="/assets/modules/nicescroll/jquery.nicescroll.min.js" />
      <Script defer src="/assets/modules/moment.min.js" />
      <Script defer src="/assets/js/stisla.js" />
      <Script defer src="/assets/modules/jquery.sparkline.min.js" />
      <Script defer src="/assets/modules/chart.min.js" />
      <Script defer src="/assets/modules/owlcarousel2/dist/owl.carousel.min.js" />
      <Script defer src="/assets/modules/summernote/summernote-bs4.js" />
      <Script defer src="/assets/modules/chocolat/dist/js/jquery.chocolat.min.js" />
      <Script defer src="/assets/js/scripts.js" />
      <Script defer src="/assets/js/custom.js" />
    </>
  )
}