import CMS from "netlify-cms-app";
import { it } from "netlify-cms-locales";

import cloudinary from "netlify-cms-media-library-cloudinary";

CMS.registerMediaLibrary(cloudinary);
CMS.registerLocale("it", it);
