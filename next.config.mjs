import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import withVideos from 'next-videos';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default withVideos({
  images: {
    domains: ['example.com', 'res.cloudinary.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});
