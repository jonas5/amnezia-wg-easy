/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-new */

'use strict';

const messages = { // eslint-disable-line no-unused-vars
  en: {
    name: 'Name',
    password: 'Password',
    signIn: 'Sign In',
    logout: 'Logout',
    updateAvailable: 'There is an update available!',
    update: 'Update',
    clients: 'Clients',
    servers: 'Servers',
    new: 'New',
    newServer: 'New Server',
    noServers: 'There are no servers yet.',
    publicKey: 'Public Key',
    endpoint: 'Endpoint',
    allowedIPs: 'Allowed IPs',
    preSharedKey: 'Preshared Key',
    persistentKeepalive: 'Persistent Keepalive',
    import: 'Import',
    deleteClient: 'Delete Client',
    deleteDialog1: 'Are you sure you want to delete',
    deleteDialog2: 'This action cannot be undone.',
    cancel: 'Cancel',
    create: 'Create',
    createdOn: 'Created on ',
    lastSeen: 'Last seen on ',
    totalDownload: 'Total Download: ',
    totalUpload: 'Total Upload: ',
    newClient: 'New Client',
    disableClient: 'Disable Client',
    enableClient: 'Enable Client',
    noClients: 'There are no clients yet.',
    noPrivKey: 'This client has no known private key. Cannot create Configuration.',
    showQR: 'Show QR Code',
    downloadConfig: 'Download Configuration',
    madeBy: 'Made by',
    donate: 'Donate',
    toggleCharts: 'Show/hide Charts',
    theme: { dark: 'Dark theme', light: 'Light theme', auto: 'Auto theme' },
    restore: 'Restore',
    backup: 'Backup',
    titleRestoreConfig: 'Restore your configuration',
    titleBackupConfig: 'Backup your configuration',
    rememberMe: 'Remember me',
    titleRememberMe: 'Stay logged after closing the browser',
    sort: 'Sort',
    ExpireDate: 'Expire Date',
    Permanent: 'Permanent',
    OneTimeLink: 'Generate short one time link',
  },
  ua: {
    name: 'Ім`я',
    password: 'Пароль',
    signIn: 'Увійти',
    logout: 'Вихід',
    updateAvailable: 'Доступне оновлення!',
    update: 'Оновити',
    clients: 'Клієнти',
    new: 'Новий',
    deleteClient: 'Видалити клієнта',
    deleteDialog1: 'Ви впевнені, що бажаєте видалити',
    deleteDialog2: 'Цю дію неможливо скасувати.',
    cancel: 'Скасувати',
    create: 'Створити',
    createdOn: 'Створено ',
    lastSeen: 'Останнє підключення в ',
    totalDownload: 'Всього завантажено: ',
    totalUpload: 'Всього відправлено: ',
    newClient: 'Новий клієнт',
    disableClient: 'Вимкнути клієнта',
    enableClient: 'Увімкнути клієнта',
    noClients: 'Ще немає клієнтів.',
    noPrivKey: 'У цього клієнта немає відомого приватного ключа. Неможливо створити конфігурацію.',
    showQR: 'Показати QR-код',
    downloadConfig: 'Завантажити конфігурацію',
    madeBy: 'Зроблено',
    donate: 'Пожертвувати',
    toggleCharts: 'Показати/сховати діаграми',
    theme: { dark: 'Темна тема', light: 'Світла тема', auto: 'Автоматична тема' },
    restore: 'Відновити',
    backup: 'Резервна копія',
    titleRestoreConfig: 'Відновити конфігурацію',
    titleBackupConfig: 'Створити резервну копію конфігурації',
  },
  ru: {
    name: 'Имя',
    password: 'Пароль',
    signIn: 'Войти',
    logout: 'Выйти',
    updateAvailable: 'Доступно обновление!',
    update: 'Обновить',
    clients: 'Клиенты',
    new: 'Создать',
    deleteClient: 'Удалить клиента',
    deleteDialog1: 'Вы уверены, что хотите удалить',
    deleteDialog2: 'Это действие невозможно отменить.',
    cancel: 'Закрыть',
    create: 'Создать',
    createdOn: 'Создано в ',
    lastSeen: 'Последнее подключение в ',
    totalDownload: 'Всего скачано: ',
    totalUpload: 'Всего загружено: ',
    newClient: 'Создать клиента',
    disableClient: 'Выключить клиента',
    enableClient: 'Включить клиента',
    noClients: 'Пока нет клиентов.',
    noPrivKey: 'Невозможно создать конфигурацию: у клиента нет известного приватного ключа.',
    showQR: 'Показать QR-код',
    downloadConfig: 'Скачать конфигурацию',
    madeBy: 'Автор',
    donate: 'Поблагодарить',
    toggleCharts: 'Показать/скрыть графики',
    theme: { dark: 'Темная тема', light: 'Светлая тема', auto: 'Как в системе' },
    restore: 'Восстановить',
    backup: 'Резервная копия',
    titleRestoreConfig: 'Восстановить конфигурацию',
    titleBackupConfig: 'Создать резервную копию конфигурации',
    rememberMe: 'Запомнить меня',
    titleRememberMe: 'Оставаться в системе после закрытия браузера',
    sort: 'Сортировка',
    ExpireDate: 'Дата истечения срока',
    Permanent: 'Бессрочно',
    OneTimeLink: 'Создать короткую одноразовую ссылку',
  },
  tr: { // Müslüm Barış Korkmazer @babico
    name: 'İsim',
    password: 'Şifre',
    signIn: 'Giriş Yap',
    logout: 'Çıkış Yap',
    updateAvailable: 'Mevcut bir güncelleme var!',
    update: 'Güncelle',
    clients: 'Kullanıcılar',
    new: 'Yeni',
    deleteClient: 'Kullanıcı Sil',
    deleteDialog1: 'Silmek istediğine emin misin',
    deleteDialog2: 'Bu işlem geri alınamaz.',
    cancel: 'İptal',
    create: 'Oluştur',
    createdOn: 'Şu saatte oluşturuldu: ',
    lastSeen: 'Son görülme tarihi: ',
    totalDownload: 'Toplam İndirme: ',
    totalUpload: 'Toplam Yükleme: ',
    newClient: 'Yeni Kullanıcı',
    disableClient: 'Kullanıcıyı Devre Dışı Bırak',
    enableClient: 'Kullanıcıyı Etkinleştir',
    noClients: 'Henüz kullanıcı yok.',
    noPrivKey: 'Bu istemcinin bilinen bir özel anahtarı yok. Yapılandırma oluşturulamıyor.',
    showQR: 'QR Kodunu Göster',
    downloadConfig: 'Yapılandırmayı İndir',
    madeBy: 'Yapan Kişi: ',
    donate: 'Bağış Yap',
    toggleCharts: 'Grafiği göster/gizle',
    theme: { dark: 'Karanlık tema', light: 'Açık tema', auto: 'Otomatik tema' },
    restore: 'Geri yükle',
    backup: 'Yedekle',
    titleRestoreConfig: 'Yapılandırmanızı geri yükleyin',
    titleBackupConfig: 'Yapılandırmanızı yedekleyin',
  },
  no: { // github.com/digvalley
    name: 'Navn',
    password: 'Passord',
    signIn: 'Logg Inn',
    logout: 'Logg Ut',
    updateAvailable: 'En ny oppdatering er tilgjengelig!',
    update: 'Oppdater',
    clients: 'Klienter',
    new: 'Ny',
    deleteClient: 'Slett Klient',
    deleteDialog1: 'Er du sikker på at du vil slette?',
    deleteDialog2: 'Denne handlingen kan ikke angres',
    cancel: 'Avbryt',
    create: 'Opprett',
    createdOn: 'Opprettet ',
    lastSeen: 'Sist sett ',
    totalDownload: 'Total Nedlasting: ',
    totalUpload: 'Total Opplasting: ',
    newClient: 'Ny Klient',
    disableClient: 'Deaktiver Klient',
    enableClient: 'Aktiver Klient',
    noClients: 'Ingen klienter opprettet enda.',
    showQR: 'Vis QR Kode',
    downloadConfig: 'Last Ned Konfigurasjon',
    madeBy: 'Laget av',
    donate: 'Doner',
  },
  pl: { // github.com/archont94
    name: 'Nazwa',
    password: 'Hasło',
    signIn: 'Zaloguj się',
    logout: 'Wyloguj się',
    updateAvailable: 'Dostępna aktualizacja!',
    update: 'Aktualizuj',
    clients: 'Klienci',
    new: 'Stwórz klienta',
    deleteClient: 'Usuń klienta',
    deleteDialog1: 'Jesteś pewny że chcesz usunąć',
    deleteDialog2: 'Tej akcji nie da się cofnąć.',
    cancel: 'Anuluj',
    create: 'Stwórz',
    createdOn: 'Utworzono ',
    lastSeen: 'Ostatnio widziany ',
    totalDownload: 'Całkowite pobieranie: ',
    totalUpload: 'Całkowite wysyłanie: ',
    newClient: 'Nowy klient',
    disableClient: 'Wyłączenie klienta',
    enableClient: 'Włączenie klienta',
    noClients: 'Nie ma jeszcze klientów.',
    showQR: 'Pokaż kod QR',
    downloadConfig: 'Pobierz konfigurację',
    madeBy: 'Stworzone przez',
    donate: 'Wsparcie autora',
  },
  fr: { // github.com/clem3109
    name: 'Nom',
    password: 'Mot de passe',
    signIn: 'Se Connecter',
    logout: 'Se déconnecter',
    updateAvailable: 'Une mise à jour est disponible !',
    update: 'Mise à jour',
    clients: 'Clients',
    new: 'Nouveau',
    deleteClient: 'Supprimer ce client',
    deleteDialog1: 'Êtes-vous que vous voulez supprimer',
    deleteDialog2: 'Cette action ne peut pas être annulée.',
    cancel: 'Annuler',
    create: 'Créer',
    createdOn: 'Créé le ',
    lastSeen: 'Dernière connexion le ',
    totalDownload: 'Téléchargement total : ',
    totalUpload: 'Téléversement total : ',
    newClient: 'Nouveau client',
    disableClient: 'Désactiver ce client',
    enableClient: 'Activer ce client',
    noClients: 'Aucun client pour le moment.',
    showQR: 'Afficher le code à réponse rapide (QR Code)',
    downloadConfig: 'Télécharger la configuration',
    madeBy: 'Développé par',
    donate: 'Soutenir',
    restore: 'Restaurer',
    backup: 'Sauvegarder',
    titleRestoreConfig: 'Restaurer votre configuration',
    titleBackupConfig: 'Sauvegarder votre configuration',
  },
  de: { // github.com/florian-asche
    name: 'Name',
    password: 'Passwort',
    signIn: 'Anmelden',
    logout: 'Abmelden',
    updateAvailable: 'Eine Aktualisierung steht zur Verfügung!',
    update: 'Aktualisieren',
    clients: 'Clients',
    new: 'Neu',
    deleteClient: 'Client löschen',
    deleteDialog1: 'Möchtest du wirklich löschen?',
    deleteDialog2: 'Diese Aktion kann nicht rückgängig gemacht werden.',
    cancel: 'Abbrechen',
    create: 'Erstellen',
    createdOn: 'Erstellt am ',
    lastSeen: 'Zuletzt Online ',
    totalDownload: 'Gesamt Download: ',
    totalUpload: 'Gesamt Upload: ',
    newClient: 'Neuer Client',
    disableClient: 'Client deaktivieren',
    enableClient: 'Client aktivieren',
    noClients: 'Es wurden noch keine Clients konfiguriert.',
    noPrivKey: 'Es ist kein Private Key für diesen Client bekannt. Eine Konfiguration kann nicht erstellt werden.',
    showQR: 'Zeige den QR Code',
    downloadConfig: 'Konfiguration herunterladen',
    madeBy: 'Erstellt von',
    donate: 'Spenden',
    restore: 'Wiederherstellen',
    backup: 'Sichern',
    titleRestoreConfig: 'Stelle deine Konfiguration wieder her',
    titleBackupConfig: 'Sichere deine Konfiguration',
  },
  ca: { // github.com/guillembonet
    name: 'Nom',
    password: 'Contrasenya',
    signIn: 'Iniciar sessió',
    logout: 'Tanca sessió',
    updateAvailable: 'Hi ha una actualització disponible!',
    update: 'Actualitza',
    clients: 'Clients',
    new: 'Nou',
    deleteClient: 'Esborra client',
    deleteDialog1: 'Estàs segur que vols esborrar aquest client?',
    deleteDialog2: 'Aquesta acció no es pot desfer.',
    cancel: 'Cancel·la',
    create: 'Crea',
    createdOn: 'Creat el ',
    lastSeen: 'Última connexió el ',
    totalDownload: 'Baixada total: ',
    totalUpload: 'Pujada total: ',
    newClient: 'Nou client',
    disableClient: 'Desactiva client',
    enableClient: 'Activa client',
    noClients: 'Encara no hi ha cap client.',
    showQR: 'Mostra codi QR',
    downloadConfig: 'Descarrega configuració',
    madeBy: 'Fet per',
    donate: 'Donatiu',
  },
  es: { // github.com/amarqz
    name: 'Nombre',
    password: 'Contraseña',
    signIn: 'Iniciar sesión',
    logout: 'Cerrar sesión',
    updateAvailable: '¡Hay una actualización disponible!',
    update: 'Actualizar',
    clients: 'Clientes',
    new: 'Nuevo',
    deleteClient: 'Eliminar cliente',
    deleteDialog1: '¿Estás seguro de que quieres borrar este cliente?',
    deleteDialog2: 'Esta acción no podrá ser revertida.',
    cancel: 'Cancelar',
    create: 'Crear',
    createdOn: 'Creado el ',
    lastSeen: 'Última conexión el ',
    totalDownload: 'Total descargado: ',
    totalUpload: 'Total subido: ',
    newClient: 'Nuevo cliente',
    disableClient: 'Desactivar cliente',
    enableClient: 'Activar cliente',
    noClients: 'Aún no hay ningún cliente.',
    showQR: 'Mostrar código QR',
    downloadConfig: 'Descargar configuración',
    madeBy: 'Hecho por',
    donate: 'Donar',
    toggleCharts: 'Mostrar/Ocultar gráficos',
    theme: { dark: 'Modo oscuro', light: 'Modo claro', auto: 'Modo automático' },
    restore: 'Restaurar',
    backup: 'Realizar copia de seguridad',
    titleRestoreConfig: 'Restaurar su configuración',
    titleBackupConfig: 'Realizar copia de seguridad de su configuración',
  },
  ko: {
    name: '이름',
    password: '암호',
    signIn: '로그인',
    logout: '로그아웃',
    updateAvailable: '업데이트가 있습니다!',
    update: '업데이트',
    clients: '클라이언트',
    new: '추가',
    deleteClient: '클라이언트 삭제',
    deleteDialog1: '삭제 하시겠습니까?',
    deleteDialog2: '이 작업은 취소할 수 없습니다.',
    cancel: '취소',
    create: '생성',
    createdOn: '생성일: ',
    lastSeen: '마지막 사용 날짜: ',
    totalDownload: '총 다운로드: ',
    totalUpload: '총 업로드: ',
    newClient: '새로운 클라이언트',
    disableClient: '클라이언트 비활성화',
    enableClient: '클라이언트 활성화',
    noClients: '아직 클라이언트가 없습니다.',
    showQR: 'QR 코드 표시',
    downloadConfig: '구성 다운로드',
    madeBy: '만든 사람',
    donate: '기부',
    toggleCharts: '차트 표시/숨기기',
    theme: { dark: '어두운 테마', light: '밝은 테마', auto: '자동 테마' },
    restore: '복원',
    backup: '백업',
    titleRestoreConfig: '구성 파일 복원',
    titleBackupConfig: '구성 파일 백업',
  },
  vi: { // https://github.com/hoangneeee
    name: 'Tên',
    password: 'Mật khẩu',
    signIn: 'Đăng nhập',
    logout: 'Đăng xuất',
    updateAvailable: 'Có bản cập nhật mới!',
    update: 'Cập nhật',
    clients: 'Danh sách người dùng',
    new: 'Mới',
    deleteClient: 'Xóa người dùng',
    deleteDialog1: 'Bạn có chắc chắn muốn xóa',
    deleteDialog2: 'Thao tác này không thể hoàn tác.',
    cancel: 'Huỷ',
    create: 'Tạo',
    createdOn: 'Được tạo lúc ',
    lastSeen: 'Lần xem cuối vào ',
    totalDownload: 'Tổng dung lượng tải xuống: ',
    totalUpload: 'Tổng dung lượng tải lên: ',
    newClient: 'Người dùng mới',
    disableClient: 'Vô hiệu hóa người dùng',
    enableClient: 'Kích hoạt người dùng',
    noClients: 'Hiện chưa có người dùng nào.',
    showQR: 'Hiển thị mã QR',
    downloadConfig: 'Tải xuống cấu hình',
    madeBy: 'Được tạo bởi',
    donate: 'Ủng hộ',
    toggleCharts: 'Mở/Ẩn Biểu đồ',
    theme: { dark: 'Dark theme', light: 'Light theme', auto: 'Auto theme' },
    restore: 'Khôi phục',
    backup: 'Sao lưu',
    titleRestoreConfig: 'Khôi phục cấu hình của bạn',
    titleBackupConfig: 'Sao lưu cấu hình của bạn',
    sort: 'Sắp xếp',
  },
  nl: {
    name: 'Naam',
    password: 'Wachtwoord',
    signIn: 'Inloggen',
    logout: 'Uitloggen',
    updateAvailable: 'Nieuw update beschikbaar!',
    update: 'update',
    clients: 'clients',
    new: 'Nieuw',
    deleteClient: 'client verwijderen',
    deleteDialog1: 'Weet je zeker dat je wilt verwijderen',
    deleteDialog2: 'Deze actie kan niet ongedaan worden gemaakt.',
    cancel: 'Annuleren',
    create: 'Creëren',
    createdOn: 'Gemaakt op ',
    lastSeen: 'Laatst gezien op ',
    totalDownload: 'Totaal Gedownload: ',
    totalUpload: 'Totaal Geupload: ',
    newClient: 'Nieuwe client',
    disableClient: 'client uitschakelen',
    enableClient: 'client inschakelen',
    noClients: 'Er zijn nog geen clients.',
    showQR: 'QR-code weergeven',
    downloadConfig: 'Configuratie downloaden',
    madeBy: 'Gemaakt door',
    donate: 'Doneren',
  },
  is: {
    name: 'Nafn',
    password: 'Lykilorð',
    signIn: 'Skrá inn',
    logout: 'Útskráning',
    updateAvailable: 'Það er uppfærsla í boði!',
    update: 'Uppfæra',
    clients: 'Viðskiptavinir',
    new: 'Nýtt',
    deleteClient: 'Eyða viðskiptavin',
    deleteDialog1: 'Ertu viss um að þú viljir eyða',
    deleteDialog2: 'Þessi aðgerð getur ekki verið afturkallað.',
    cancel: 'Hætta við',
    create: 'Búa til',
    createdOn: 'Búið til á ',
    lastSeen: 'Síðast séð á ',
    totalDownload: 'Samtals Niðurhlaða: ',
    totalUpload: 'Samtals Upphlaða: ',
    newClient: 'Nýr Viðskiptavinur',
    disableClient: 'Gera viðskiptavin óvirkan',
    enableClient: 'Gera viðskiptavin virkan',
    noClients: 'Engir viðskiptavinir ennþá.',
    showQR: 'Sýna QR-kóða',
    downloadConfig: 'Niðurhal Stillingar',
    madeBy: 'Gert af',
    donate: 'Gefa',
  },
  pt: {
    name: 'Nome',
    password: 'Palavra Chave',
    signIn: 'Entrar',
    logout: 'Sair',
    updateAvailable: 'Existe uma atualização disponível!',
    update: 'Atualizar',
    clients: 'Clientes',
    new: 'Novo',
    deleteClient: 'Apagar Clientes',
    deleteDialog1: 'Tem certeza que pretende apagar',
    deleteDialog2: 'Esta ação não pode ser revertida.',
    cancel: 'Cancelar',
    create: 'Criar',
    createdOn: 'Criado em ',
    lastSeen: 'Último acesso em ',
    totalDownload: 'Total Download: ',
    totalUpload: 'Total Upload: ',
    newClient: 'Novo Cliente',
    disableClient: 'Desativar Cliente',
    enableClient: 'Ativar Cliente',
    noClients: 'Não existem ainda clientes.',
    showQR: 'Apresentar o código QR',
    downloadConfig: 'Descarregar Configuração',
    madeBy: 'Feito por',
    donate: 'Doar',
  },
  chs: {
    name: '名称',
    password: '密码',
    signIn: '登录',
    logout: '退出',
    updateAvailable: '有新版本可用！',
    update: '更新',
    clients: '客户端',
    new: '新建',
    deleteClient: '删除客户端',
    deleteDialog1: '您确定要删除',
    deleteDialog2: '此操作无法撤销。',
    cancel: '取消',
    create: '创建',
    createdOn: '创建于 ',
    lastSeen: '最后访问于 ',
    totalDownload: '总下载: ',
    totalUpload: '总上传: ',
    newClient: '新建客户端',
    disableClient: '禁用客户端',
    enableClient: '启用客户端',
    noClients: '目前没有客户端。',
    noPrivKey: '此客户端没有已知的私钥。无法创建配置。',
    showQR: '显示二维码',
    downloadConfig: '下载配置',
    madeBy: '由',
    donate: '捐赠',
    toggleCharts: '显示/隐藏图表',
    theme: { dark: '暗黑主题', light: '明亮主题', auto: '自动主题' },
    restore: '恢复',
    backup: '备份',
    titleRestoreConfig: '恢复您的配置',
    titleBackupConfig: '备份您的配置',
    rememberMe: '记住我',
    titleRememberMe: '关闭浏览器后保持登录',
    sort: '排序',
    ExpireDate: '到期日期',
    Permanent: '永久',
    OneTimeLink: '生成一次性短链接',
  },
  cht: {
    name: '名字',
    password: '密碼',
    signIn: '登入',
    logout: '登出',
    updateAvailable: '有新版本可以使用！',
    update: '更新',
    clients: '使用者',
    new: '建立',
    deleteClient: '刪除使用者',
    deleteDialog1: '您確定要刪除',
    deleteDialog2: '此作業無法復原。',
    cancel: '取消',
    create: '建立',
    createdOn: '建立於 ',
    lastSeen: '最後存取於 ',
    totalDownload: '總下載: ',
    totalUpload: '總上傳: ',
    newClient: '新用戶',
    disableClient: '停用使用者',
    enableClient: '啟用使用者',
    noClients: '目前沒有使用者。',
    noPrivKey: '此使用者沒有已知的私鑰。無法創建配置。',
    showQR: '顯示 QR Code',
    downloadConfig: '下載 Config 檔',
    madeBy: '由',
    donate: '抖內',
    toggleCharts: '顯示/隱藏圖表',
    theme: { dark: '暗黑主題', light: '明亮主題', auto: '自動主題' },
    restore: '恢復',
    backup: '備份',
    titleRestoreConfig: '恢復您的配置',
    titleBackupConfig: '備份您的配置',
    rememberMe: '記住我',
    titleRememberMe: '關閉瀏覽器後保持登錄',
    sort: '排序',
    ExpireDate: '到期日期',
    Permanent: '永久',
    OneTimeLink: '生成一次性短鏈接',
  },
  it: {
    name: 'Nome',
    password: 'Password',
    signIn: 'Accedi',
    logout: 'Esci',
    updateAvailable: 'È disponibile un aggiornamento!',
    update: 'Aggiorna',
    clients: 'Client',
    new: 'Nuovo',
    deleteClient: 'Elimina Client',
    deleteDialog1: 'Sei sicuro di voler eliminare',
    deleteDialog2: 'Questa azione non può essere annullata.',
    cancel: 'Annulla',
    create: 'Crea',
    createdOn: 'Creato il ',
    lastSeen: 'Visto l\'ultima volta il ',
    totalDownload: 'Totale Download: ',
    totalUpload: 'Totale Upload: ',
    newClient: 'Nuovo Client',
    disableClient: 'Disabilita Client',
    enableClient: 'Abilita Client',
    noClients: 'Non ci sono ancora client.',
    showQR: 'Mostra codice QR',
    downloadConfig: 'Scarica configurazione',
    madeBy: 'Realizzato da',
    donate: 'Donazione',
    restore: 'Ripristina',
    backup: 'Backup',
    titleRestoreConfig: 'Ripristina la tua configurazione',
    titleBackupConfig: 'Esegui il backup della tua configurazione',
  },
  th: {
    name: 'ชื่อ',
    password: 'รหัสผ่าน',
    signIn: 'ลงชื่อเข้าใช้',
    logout: 'ออกจากระบบ',
    updateAvailable: 'มีอัปเดตพร้อมใช้งาน!',
    update: 'อัปเดต',
    clients: 'Clients',
    new: 'ใหม่',
    deleteClient: 'ลบ Client',
    deleteDialog1: 'คุณแน่ใจหรือไม่ว่าต้องการลบ',
    deleteDialog2: 'การกระทำนี้;ไม่สามารถยกเลิกได้',
    cancel: 'ยกเลิก',
    create: 'สร้าง',
    createdOn: 'สร้างเมื่อ ',
    lastSeen: 'เห็นครั้งสุดท้ายเมื่อ ',
    totalDownload: 'ดาวน์โหลดทั้งหมด: ',
    totalUpload: 'อัพโหลดทั้งหมด: ',
    newClient: 'Client ใหม่',
    disableClient: 'ปิดการใช้งาน Client',
    enableClient: 'เปิดการใช้งาน Client',
    noClients: 'ยังไม่มี Clients เลย',
    showQR: 'แสดงรหัส QR',
    downloadConfig: 'ดาวน์โหลดการตั้งค่า',
    madeBy: 'สร้างโดย',
    donate: 'บริจาค',
  },
  hi: { // github.com/rahilarious
    name: 'नाम',
    password: 'पासवर्ड',
    signIn: 'लॉगिन',
    logout: 'लॉगआउट',
    updateAvailable: 'अपडेट उपलब्ध है!',
    update: 'अपडेट',
    clients: 'उपयोगकर्ताये',
    new: 'नया',
    deleteClient: 'उपयोगकर्ता हटाएँ',
    deleteDialog1: 'क्या आपको पक्का हटाना है',
    deleteDialog2: 'यह निर्णय पलट नहीं सकता।',
    cancel: 'कुछ ना करें',
    create: 'बनाएं',
    createdOn: 'सर्जन तारीख ',
    lastSeen: 'पिछली बार देखे गए थे ',
    totalDownload: 'कुल डाउनलोड: ',
    totalUpload: 'कुल अपलोड: ',
    newClient: 'नया उपयोगकर्ता',
    disableClient: 'उपयोगकर्ता स्थगित कीजिये',
    enableClient: 'उपयोगकर्ता शुरू कीजिये',
    noClients: 'अभी तक कोई भी उपयोगकर्ता नहीं है।',
    noPrivKey: 'ये उपयोगकर्ता की कोई भी गुप्त चाबी नहीं हे। बना नहीं सकते।',
    showQR: 'क्यू आर कोड देखिये',
    downloadConfig: 'डाउनलोड कॉन्फीग्यूरेशन',
    madeBy: 'सर्जक',
    donate: 'दान करें',
  },
};

function bytes(bytes, decimals, kib, maxunit) {
  kib = kib || false;
  if (bytes === 0) return '0 B';
  if (Number.isNaN(parseFloat(bytes)) && !Number.isFinite(bytes)) return 'NaN';
  const k = kib ? 1024 : 1000;
  const dm = decimals != null && !Number.isNaN(decimals) && decimals >= 0 ? decimals : 2;
  const sizes = kib
    ? ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB', 'BiB']
    : ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB', 'BB'];
  let i = Math.floor(Math.log(bytes) / Math.log(k));
  if (maxunit !== undefined) {
    const index = sizes.indexOf(maxunit);
    if (index !== -1) i = index;
  }
  // eslint-disable-next-line no-restricted-properties
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

/**
 * Sorts an array of objects by a specified property in ascending or descending order.
 *
 * @param {Array} array - The array of objects to be sorted.
 * @param {string} property - The property to sort the array by.
 * @param {boolean} [sort=true] - Whether to sort the array in ascending (default) or descending order.
 * @return {Array} - The sorted array of objects.
 */
function sortByProperty(array, property, sort = true) {
  if (sort) {
    return array.sort((a, b) => (typeof a[property] === 'string' ? a[property].localeCompare(b[property]) : a[property] - b[property]));
  }

  return array.sort((a, b) => (typeof a[property] === 'string' ? b[property].localeCompare(a[property]) : b[property] - a[property]));
}

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages,
});

const UI_CHART_TYPES = [
  { type: false, strokeWidth: 0 },
  { type: 'line', strokeWidth: 3 },
  { type: 'area', strokeWidth: 0 },
  { type: 'bar', strokeWidth: 0 },
];

const CHART_COLORS = {
  rx: { light: 'rgba(128,128,128,0.3)', dark: 'rgba(255,255,255,0.3)' },
  tx: { light: 'rgba(128,128,128,0.4)', dark: 'rgba(255,255,255,0.3)' },
  gradient: { light: ['rgba(0,0,0,1.0)', 'rgba(0,0,0,1.0)'], dark: ['rgba(128,128,128,0)', 'rgba(128,128,128,0)'] },
};

new Vue({
  el: '#app',
  components: {
    apexchart: VueApexCharts,
  },
  i18n,
  data: {
    authenticated: null,
    authenticating: false,
    password: null,
    requiresPassword: null,
    remember: false,
    rememberMeEnabled: false,

    activeTab: 'clients',
    peers: null,
    peersPersist: {},

    clientDelete: null,
    clientCreate: null,
    clientCreateName: '',
    clientExpiredDate: '',
    clientEditName: null,
    clientEditNameId: null,
    clientEditAddress: null,
    clientEditAddressId: null,
    clientEditExpireDate: null,
    clientEditExpireDateId: null,

    serverCreate: null,
    serverCreateName: '',
    serverCreatePublicKey: '',
    serverCreateEndpoint: '',
    serverCreateAllowedIPs: '',
    serverCreatePreSharedKey: '',
    serverCreatePersistentKeepalive: '',

    qrcode: null,

    currentRelease: null,
    latestRelease: null,

    uiTrafficStats: false,

    uiChartType: 0,
    avatarSettings: {
      'dicebear': null,
      'gravatar': false,
    },
    enableOneTimeLinks: false,
    enableSortClient: false,
    sortClient: true, // Sort clients by name, true = asc, false = desc
    enableExpireTime: false,

    uiShowCharts: localStorage.getItem('uiShowCharts') === '1',
    uiTheme: localStorage.theme || 'auto',
    prefersDarkScheme: window.matchMedia('(prefers-color-scheme: dark)'),

    chartOptions: {
      chart: {
        background: 'transparent',
        stacked: false,
        toolbar: {
          show: false,
        },
        animations: {
          enabled: false,
        },
        parentHeightOffset: 0,
        sparkline: {
          enabled: true,
        },
      },
      colors: [],
      stroke: {
        curve: 'smooth',
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'vertical',
          shadeIntensity: 0,
          gradientToColors: CHART_COLORS.gradient[this.theme],
          inverseColors: false,
          opacityTo: 0,
          stops: [0, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
        min: 0,
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
        padding: {
          left: -10,
          right: 0,
          bottom: -15,
          top: -15,
        },
        column: {
          opacity: 0,
        },
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
    },

  },
  methods: {
    dateTime: (value) => {
      return new Intl.DateTimeFormat(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }).format(value);
    },
    async refresh({
      updateCharts = false,
    } = {}) {
      if (!this.authenticated) return;

      const peers = await this.api.getPeers();
      console.log('Peers from API:', peers);
      this.peers = peers.map((peer) => {
        if (peer.name.includes('@') && peer.name.includes('.') && this.avatarSettings.gravatar) {
          peer.avatar = `https://gravatar.com/avatar/${sha256(peer.name.toLowerCase().trim())}.jpg`;
        } else if (this.avatarSettings.dicebear) {
          peer.avatar = `https://api.dicebear.com/9.x/${this.avatarSettings.dicebear}/svg?seed=${sha256(peer.name.toLowerCase().trim())}`
        }

        if (!this.peersPersist[peer.id]) {
          this.peersPersist[peer.id] = {};
          this.peersPersist[peer.id].transferRxHistory = Array(50).fill(0);
          this.peersPersist[peer.id].transferRxPrevious = peer.transferRx;
          this.peersPersist[peer.id].transferTxHistory = Array(50).fill(0);
          this.peersPersist[peer.id].transferTxPrevious = peer.transferTx;
        }

        this.peersPersist[peer.id].transferRxCurrent = peer.transferRx - this.peersPersist[peer.id].transferRxPrevious;
        this.peersPersist[peer.id].transferRxPrevious = peer.transferRx;
        this.peersPersist[peer.id].transferTxCurrent = peer.transferTx - this.peersPersist[peer.id].transferTxPrevious;
        this.peersPersist[peer.id].transferTxPrevious = peer.transferTx;

        if (updateCharts) {
          this.peersPersist[peer.id].transferRxHistory.push(this.peersPersist[peer.id].transferRxCurrent);
          this.peersPersist[peer.id].transferRxHistory.shift();

          this.peersPersist[peer.id].transferTxHistory.push(this.peersPersist[peer.id].transferTxCurrent);
          this.peersPersist[peer.id].transferTxHistory.shift();

          this.peersPersist[peer.id].transferTxSeries = [{
            name: 'Tx',
            data: this.peersPersist[peer.id].transferTxHistory,
          }];

          this.peersPersist[peer.id].transferRxSeries = [{
            name: 'Rx',
            data: this.peersPersist[peer.id].transferRxHistory,
          }];

          peer.transferTxHistory = this.peersPersist[peer.id].transferTxHistory;
          peer.transferRxHistory = this.peersPersist[peer.id].transferRxHistory;
          peer.transferMax = Math.max(...peer.transferTxHistory, ...peer.transferRxHistory);

          peer.transferTxSeries = this.peersPersist[peer.id].transferTxSeries;
          peer.transferRxSeries = this.peersPersist[peer.id].transferRxSeries;
        }

        peer.transferTxCurrent = this.peersPersist[peer.id].transferTxCurrent;
        peer.transferRxCurrent = this.peersPersist[peer.id].transferRxCurrent;

        peer.hoverTx = this.peersPersist[peer.id].hoverTx;
        peer.hoverRx = this.peersPersist[peer.id].hoverRx;

        return peer;
      });

      if (this.enableSortClient) {
        this.peers = sortByProperty(this.peers, 'name', this.sortClient);
      }
    },
    login(e) {
      e.preventDefault();

      if (!this.password) return;
      if (this.authenticating) return;

      this.authenticating = true;
      this.api.createSession({
        password: this.password,
        remember: this.remember,
      })
        .then(async () => {
          const session = await this.api.getSession();
          this.authenticated = session.authenticated;
          this.requiresPassword = session.requiresPassword;
          return this.refresh();
        })
        .catch((err) => {
          alert(err.message || err.toString());
        })
        .finally(() => {
          this.authenticating = false;
          this.password = null;
        });
    },
    logout(e) {
      e.preventDefault();

      this.api.deleteSession()
        .then(() => {
          this.authenticated = false;
          this.peers = null;
        })
        .catch((err) => {
          alert(err.message || err.toString());
        });
    },
    createClient() {
      const name = this.clientCreateName;
      const expiredDate = this.clientExpiredDate;
      if (!name) return;

      this.api.createPeer({ type: 'client', name, expiredDate })
        .catch((err) => alert(err.message || err.toString()))
        .finally(() => this.refresh().catch(console.error));
    },
    createServer() {
        if (!this.serverCreateName) return;
        const peerData = {
            type: 'server',
            name: this.serverCreateName,
            publicKey: this.serverCreatePublicKey,
            endpoint: this.serverCreateEndpoint,
            allowedIPs: this.serverCreateAllowedIPs,
            preSharedKey: this.serverCreatePreSharedKey,
            persistentKeepalive: this.serverCreatePersistentKeepalive,
        };
        this.api.createPeer(peerData)
            .catch((err) => alert(err.message || err.toString()))
            .finally(() => setTimeout(() => this.refresh().catch(console.error), 1000));
    },
    deletePeer(peer) {
      this.api.deletePeer({ peerId: peer.id })
        .catch((err) => alert(err.message || err.toString()))
        .finally(() => this.refresh().catch(console.error));
    },
    showOneTimeLink(client) {
      this.api.showOneTimeLink({ clientId: client.id })
        .catch((err) => alert(err.message || err.toString()))
        .finally(() => this.refresh().catch(console.error));
    },
    enablePeer(peer) {
      this.api.enablePeer({ peerId: peer.id })
        .catch((err) => alert(err.message || err.toString()))
        .finally(() => this.refresh().catch(console.error));
    },
    disablePeer(peer) {
      this.api.disablePeer({ peerId: peer.id })
        .catch((err) => alert(err.message || err.toString()))
        .finally(() => this.refresh().catch(console.error));
    },
    updatePeerName(peer, name) {
      this.api.updatePeerName({ peerId: peer.id, name })
        .catch((err) => alert(err.message || err.toString()))
        .finally(() => this.refresh().catch(console.error));
    },
    updatePeerAddress(peer, address) {
      this.api.updatePeerAddress({ peerId: peer.id, address })
        .catch((err) => alert(err.message || err.toString()))
        .finally(() => this.refresh().catch(console.error));
    },
    updatePeerExpireDate(peer, expireDate) {
      this.api.updatePeerExpireDate({ peerId: peer.id, expireDate })
        .catch((err) => alert(err.message || err.toString()))
        .finally(() => this.refresh().catch(console.error));
    },
    restoreConfig(e) {
      e.preventDefault();
      const file = e.currentTarget.files.item(0);
      if (file) {
        file.text()
          .then((content) => {
            this.api.restoreConfiguration(content)
              .then((_result) => alert('The configuration was updated.'))
              .catch((err) => alert(err.message || err.toString()))
              .finally(() => this.refresh().catch(console.error));
          })
          .catch((err) => alert(err.message || err.toString()));
      } else {
        alert('Failed to load your file!');
      }
    },
    toggleTheme() {
      const themes = ['light', 'dark', 'auto'];
      const currentIndex = themes.indexOf(this.uiTheme);
      const newIndex = (currentIndex + 1) % themes.length;
      this.uiTheme = themes[newIndex];
      localStorage.theme = this.uiTheme;
      this.setTheme(this.uiTheme);
    },
    setTheme(theme) {
      const { classList } = document.documentElement;
      const shouldAddDarkClass = theme === 'dark' || (theme === 'auto' && this.prefersDarkScheme.matches);
      classList.toggle('dark', shouldAddDarkClass);
    },
    handlePrefersChange(e) {
      if (localStorage.theme === 'auto') {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    },
    toggleCharts() {
      localStorage.setItem('uiShowCharts', this.uiShowCharts ? 1 : 0);
    },
    importServer(e) {
        e.preventDefault();
        const file = e.currentTarget.files.item(0);
        if (file) {
            file.text()
                .then((content) => {
                    const lines = content.split('\n');
                    let publicKey = '';
                    let endpoint = '';
                    let allowedIPs = '';
                    let preSharedKey = '';
                    let persistentKeepalive = '';

                    for (const line of lines) {
                        if (line.startsWith('PublicKey')) {
                            const anIndex = line.indexOf('=');
                            publicKey = line.substring(anIndex + 1);
                        } else if (line.startsWith('Endpoint')) {
                            endpoint = line.split('=')[1].trim();
                        } else if (line.startsWith('AllowedIPs')) {
                            allowedIPs = line.split('=')[1].trim();
                        } else if (line.startsWith('PresharedKey')) {
                            preSharedKey = line.split('=')[1].trim();
                        } else if (line.startsWith('PersistentKeepalive')) {
                            persistentKeepalive = line.split('=')[1].trim();
                        }
                    }

                    this.serverCreateName = file.name.replace('.conf', '');
                    this.serverCreatePublicKey = publicKey;
                    this.serverCreateEndpoint = endpoint;
                    this.serverCreateAllowedIPs = allowedIPs;
                    this.serverCreatePreSharedKey = preSharedKey;
                    this.serverCreatePersistentKeepalive = persistentKeepalive;
                    this.serverCreate = true;
                })
                .catch((err) => alert(err.message || err.toString()));
        } else {
            alert('Failed to load your file!');
        }
    },
  },
  filters: {
    bytes,
    timeago: (value) => {
      return timeago.format(value, i18n.locale);
    },
    expiredDateFormat: (value) => {
      if (value === null) return i18n.t('Permanent');
      const dateTime = new Date(value);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return dateTime.toLocaleDateString(i18n.locale, options);
    },
    expiredDateEditFormat: (value) => {
      if (value === null) return 'yyyy-MM-dd';
    },
  },
  mounted() {
    this.prefersDarkScheme.addListener(this.handlePrefersChange);
    this.setTheme(this.uiTheme);

    this.api = new API();
    this.api.getSession()
      .then((session) => {
        this.authenticated = session.authenticated;
        this.requiresPassword = session.requiresPassword;
        this.refresh({
          updateCharts: this.updateCharts,
        }).catch((err) => {
          alert(err.message || err.toString());
        });
      })
      .catch((err) => {
        alert(err.message || err.toString());
      });

    this.api.getRememberMeEnabled()
      .then((rememberMeEnabled) => {
        this.rememberMeEnabled = rememberMeEnabled;
      });

    setInterval(() => {
      this.refresh({
        updateCharts: this.updateCharts,
      }).catch(console.error);
    }, 1000);

    this.api.getuiTrafficStats()
      .then((res) => {
        this.uiTrafficStats = res;
      })
      .catch(() => {
        this.uiTrafficStats = false;
      });

    this.api.getChartType()
      .then((res) => {
        this.uiChartType = parseInt(res, 10);
      })
      .catch(() => {
        this.uiChartType = 0;
      });

    this.api.getWGEnableOneTimeLinks()
      .then((res) => {
        this.enableOneTimeLinks = res;
      })
      .catch(() => {
        this.enableOneTimeLinks = false;
      });

    this.api.getUiSortClients()
      .then((res) => {
        this.enableSortClient = res;
      })
      .catch(() => {
        this.enableSortClient = false;
      });

    this.api.getWGEnableExpireTime()
      .then((res) => {
        this.enableExpireTime = res;
      })
      .catch(() => {
        this.enableExpireTime = false;
      });

    this.api.getAvatarSettings()
      .then((res) => {
        this.avatarSettings = res;
      })
      .catch(() => {
          this.avatarSettings = {
            'dicebear': null,
            'gravatar': false,
          };
      });

    Promise.resolve().then(async () => {
      const lang = await this.api.getLang();
      if (lang !== localStorage.getItem('lang') && i18n.availableLocales.includes(lang)) {
        localStorage.setItem('lang', lang);
        i18n.locale = lang;
      }

      const currentRelease = await this.api.getRelease();
      const latestRelease = await fetch('https://wg-easy.github.io/wg-easy/changelog.json')
        .then((res) => res.json())
        .then((releases) => {
          const releasesArray = Object.entries(releases).map(([version, changelog]) => ({
            version: parseInt(version, 10),
            changelog,
          }));
          releasesArray.sort((a, b) => {
            return b.version - a.version;
          });

          return releasesArray[0];
        });

      if (currentRelease >= latestRelease.version) return;

      this.currentRelease = currentRelease;
      this.latestRelease = latestRelease;
    }).catch((err) => console.error(err));
  },
  computed: {
    clients() {
        return this.peers ? this.peers.filter(p => p.type === 'client') : null;
    },
    servers() {
        return this.peers ? this.peers.filter(p => p.type === 'server') : null;
    },
    chartOptionsTX() {
      const opts = {
        ...this.chartOptions,
        colors: [CHART_COLORS.tx[this.theme]],
      };
      opts.chart.type = UI_CHART_TYPES[this.uiChartType].type || false;
      opts.stroke.width = UI_CHART_TYPES[this.uiChartType].strokeWidth;
      return opts;
    },
    chartOptionsRX() {
      const opts = {
        ...this.chartOptions,
        colors: [CHART_COLORS.rx[this.theme]],
      };
      opts.chart.type = UI_CHART_TYPES[this.uiChartType].type || false;
      opts.stroke.width = UI_CHART_TYPES[this.uiChartType].strokeWidth;
      return opts;
    },
    updateCharts() {
      return this.uiChartType > 0 && this.uiShowCharts;
    },
    theme() {
      if (this.uiTheme === 'auto') {
        return this.prefersDarkScheme.matches ? 'dark' : 'light';
      }
      return this.uiTheme;
    },
  },
});

class API {

  async call({ method, path, body }) {
    const res = await fetch(`./api${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body
        ? JSON.stringify(body)
        : undefined,
    });

    if (res.status === 204) {
      return undefined;
    }

    const json = await res.json();

    if (!res.ok) {
      throw new Error(json.error || res.statusText);
    }

    return json;
  }

  async getRelease() {
    return this.call({
      method: 'get',
      path: '/release',
    });
  }

  async getLang() {
    return this.call({
      method: 'get',
      path: '/lang',
    });
  }

  async getRememberMeEnabled() {
    return this.call({
      method: 'get',
      path: '/remember-me',
    });
  }

  async getuiTrafficStats() {
    return this.call({
      method: 'get',
      path: '/ui-traffic-stats',
    });
  }

  async getChartType() {
    return this.call({
      method: 'get',
      path: '/ui-chart-type',
    });
  }

  async getWGEnableOneTimeLinks() {
    return this.call({
      method: 'get',
      path: '/wg-enable-one-time-links',
    });
  }

  async getWGEnableExpireTime() {
    return this.call({
      method: 'get',
      path: '/wg-enable-expire-time',
    });
  }

  async getAvatarSettings() {
    return this.call({
      method: 'get',
      path: '/ui-avatar-settings',
    });
  }

  async getSession() {
    return this.call({
      method: 'get',
      path: '/session',
    });
  }

  async createSession({ password, remember }) {
    return this.call({
      method: 'post',
      path: '/session',
      body: { password, remember },
    });
  }

  async deleteSession() {
    return this.call({
      method: 'delete',
      path: '/session',
    });
  }

  async getPeers() {
    return this.call({
      method: 'get',
      path: '/wireguard/peer',
    }).then((peers) => peers.map((peer) => ({
      ...peer,
      createdAt: new Date(peer.createdAt),
      updatedAt: new Date(peer.updatedAt),
      expiredAt: peer.expiredAt !== null
        ? new Date(peer.expiredAt)
        : null,
      latestHandshakeAt: peer.latestHandshakeAt !== null
        ? new Date(peer.latestHandshakeAt)
        : null,
    })));
  }

  async createPeer(peerData) {
    return this.call({
      method: 'post',
      path: '/wireguard/peer',
      body: peerData,
    });
  }

  async deletePeer({ peerId }) {
    return this.call({
      method: 'delete',
      path: `/wireguard/peer/${peerId}`,
    });
  }

  async showOneTimeLink({ clientId }) {
    return this.call({
      method: 'post',
      path: `/wireguard/client/${clientId}/generateOneTimeLink`,
    });
  }

  async enablePeer({ peerId }) {
    return this.call({
      method: 'post',
      path: `/wireguard/peer/${peerId}/enable`,
    });
  }

  async disablePeer({ peerId }) {
    return this.call({
      method: 'post',
      path: `/wireguard/peer/${peerId}/disable`,
    });
  }

  async updatePeerName({ peerId, name }) {
    return this.call({
      method: 'put',
      path: `/wireguard/peer/${peerId}/name/`,
      body: { name },
    });
  }

  async updatePeerAddress({ peerId, address }) {
    return this.call({
      method: 'put',
      path: `/wireguard/peer/${peerId}/address/`,
      body: { address },
    });
  }

  async updatePeerExpireDate({ peerId, expireDate }) {
    return this.call({
      method: 'put',
      path: `/wireguard/peer/${peerId}/expireDate/`,
      body: { expireDate },
    });
  }

  async restoreConfiguration(file) {
    return this.call({
      method: 'put',
      path: '/wireguard/restore',
      body: { file },
    });
  }

  async getUiSortClients() {
    return this.call({
      method: 'get',
      path: '/ui-sort-clients',
    });
  }

}
