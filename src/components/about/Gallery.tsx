import pic_1 from "@/assets/components/about/gallery/pic_1.webp";
import pic_2 from "@/assets/components/about/gallery/pic_2.webp";
import pic_3 from "@/assets/components/about/gallery/pic_3.webp";
import pic_4 from "@/assets/components/about/gallery/pic_4.webp";

const images = [pic_1, pic_2, pic_3, pic_4];

const Gallery = () => {
  return (
    <section className="py-16 md:py-32 bg-linear-to-b from-white via-gray-300 to-white flex justify-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {images.map((src, index) => (
            <div key={index} className="bg-white p-4 md:p-6 shadow-sm rounded-sm">
              <div className="border border-gray-200 rounded-sm overflow-hidden aspect-square flex">
                <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
