import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export  const client = sanityClient({
        projectId:'t8ifejzg',
        dataset: 'production',
        apiVersion : '2022-08-07',
        useCdn:true,
        token:'skzSzC0uHmic7AuuVTPVsLq9X3fuNxu6wit7VSK9IL2bMKsbcpbZpybXQOBeVtJXwfCQxrfAhA34vJOaDuKf72HW4sQiT9CNTx6bzBIPEGze0H5gCZWom8CXYomuUlnpYjxxe92JN4ciVlwFzzLyJxaBMEo6rXf0qokEQJ40w4VNAROZlkjg' ,

})

const builder = imageUrlBuilder(client);
export const urlFor =(source) =>builder.image(source)
