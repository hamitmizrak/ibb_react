import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en:
            {
                translations: {
                    'homepage': "Home Page",
                    'about': "About",
                    'blog': "Blog",
                    'blog_create':"Blog Create",
                    'blog_update':"Blog Update",
                    'blog_delete':"Blog Delete",
                    'blog_all_delete':"Blog All Delete",
                    'blog_list':"Blog List",
                    'blog_id':"ID",
                    'blog_header':"Blog Header",
                    'blog_content':"Blog Content",
                    'date':"Date",
                    'submit':"Submit",
                    'reset':"Reset",
                    'update':"Update",
                    'view':"View",
                    'delete':"Delete",
                    'member_process':"member process",
                    'register':"register",
                    'login':"login",
                }
            },
        tr:
            {
                translations: {
                    'homepage': "Ana Sayfa",
                    'about': "Hakkımızda",
                    'blog': "Blog",
                    'blog_create':"Blog Ekle",
                    'blog_update':"Blog Güncelle",
                    'blog_delete':"Blog Sil",
                    'blog_all_delete':"Blog Bütün veriyi Sil",
                    'blog_list':"Blog Listele",
                    'blog_id':"Blog ID",
                    'blog_header':"Blog Başlığı",
                    'blog_content':"Blog İçeriği",
                    'date':"Tarih",
                    'submit':"Gönder",
                    'reset':"Temizle",
                    'update':"Güncelle",
                    'view':"Göster",
                    'delete':"Sil",
                    'member_process':"Üye İşlemleri",
                    'register':"Üye Kayıtı",
                    'login':"Üye Girişi",
                }
            }
    },
    fallbackLng: 'tr',    //fallbackLng: 'en', fall back function    
    ns: ['translations'], //kelimeleri nerede alsın
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {escapeValue: false, formatSeparator: ','},
    react: {
        wait: true
    }
});
export default i18n;