var store = [{
        "title": "Welcome to Jekyll!",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when...","categories": ["jekyll"],
        "tags": [],
        "url": "http://localhost:4000/jekyll/welcome-to-jekyll/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "Email BackEnd with SMTP Gmail",
        "excerpt":"Add this configurations in your settings.py   This configurations is if you work with smtp.gmail.com, other smtp is similiar with configurations.      Unlock Captha: https://accounts.google.com/DisplayUnlockCaptcha   Change to active: https://www.google.com/settings/security/lesssecureapps   EMAIL_HOST          = 'smtp.gmail.com' EMAIL_PORT          = 587 EMAIL_HOST_USER     = 'your_gmail@gmail.com' EMAIL_HOST_PASSWORD = 'your_password' EMAIL_USE_TLS       = True DEFAULT_FROM_EMAIL  = EMAIL_HOST_USER EMAIL_BACKEND       = 'django.core.mail.backends.smtp.EmailBackend'  ","categories": ["python","django"],
        "tags": [],
        "url": "http://localhost:4000/python/django/email-backend-with-smtp-gmail/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "Adding BroadCast Mail to All Users Registered inside Django Admin",
        "excerpt":"Adding BroadCast Mail to All User Registered in Django Admin. This is my last problem, we need custom default Django Admin to can submit BroadCast mail to All User. Because this is perfectly to make a promotions. This problem has been helped by our Danny W. Adair who are answered...","categories": ["python","django"],
        "tags": [],
        "url": "http://localhost:4000/python/django/adding-broadcast-mail-to-all-users-registered-inside-django-admin/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "Setup Django in apache2 Raspberry Pi",
        "excerpt":"Setup Django in apache2 Raspberry Pi. Example in this configuration for monitoring the server raspberry pi using https://github.com/k3oni/pydash/. As following this configurations https://github.com/k3oni/pydash/wiki/Install-pyDash#3-setup-apache, how to setup it. Edit in your: /etc/apache2/sites-available/pydash.conf and then, add this configuration: Listen 192.168.1.27:8001 &lt;VirtualHost *:8001&gt; ServerName 192.168.1.27:80/pydash ServerAlias 192.168.1.27:8001 DocumentRoot /var/www/pydash/ WSGIDaemonProcess pydash display-name=%{GROUP} python-path=/var/www/pydash...","categories": ["django","raspberry"],
        "tags": [],
        "url": "http://localhost:4000/django/raspberry/setup-django-in-apache2-raspberry-pi/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "Javascript Validator for Input Number",
        "excerpt":"This javascript will validate/allow the number only when event key is pressed. For example result of it: tutorial above, when you can not directly add the attribute inside html tag. but if you can add it, you can following this tutorial bellow: &lt;input id=\"id_price\" type=\"number\" min=0 onkeypress=\"return isNumber(event)\"/&gt; &lt;script type=\"text/javascript\"&gt;...","categories": ["others"],
        "tags": [],
        "url": "http://localhost:4000/others/javascript-validator-for-input-number/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "Python Crazy Decrypter has been Released",
        "excerpt":"Hello gays, this night i want to share my Python Crazy Decrypter tool. Python Crazy Decrypter is real crazy tool to decrypt md5, sha1, sha224, sha256, sha384, and sha512 with Brute Force method. Like most hashes Decrypter we know used the database to check the hash is valid or not....","categories": ["python","security"],
        "tags": [],
        "url": "http://localhost:4000/python/security/python-crazy-decrypter-has-been-released/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "Python Simple Ciphertext",
        "excerpt":"Simply how to make a ciphertext only with 1 line. in this sample, the plaintext is result encoded from hexa. and then, just changing all integer 3 to 6 and also otherwise from 6 to 3. &gt;&gt;&gt; #hex_encode = 'summonagus'.encode('hex') &gt;&gt;&gt; hex_encode = '73756d6d6f6e61677573' &gt;&gt;&gt; chip = ''.join([ str(int(a)*2) if...","categories": ["python","security"],
        "tags": [],
        "url": "http://localhost:4000/python/security/python-simple-ciphertext/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "Top 10 Python libraries of 2016",
        "excerpt":"Last year, we did a recap with what we thought were the best Python libraries of 2015, which was widely shared within the Python community (see post inr/Python). A year has gone by, and again it is time to give due credit for the awesome work that has been done...","categories": ["python","django"],
        "tags": [],
        "url": "http://localhost:4000/python/django/top-10-python-libraries-of-2016/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "Welcome to Jekyll!",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when...","categories": ["blog"],
        "tags": ["Jekyll","update"],
        "url": "http://localhost:4000/blog/welcome-to-jekyll/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "How to change Jekyll theme to Minimal Mistakes",
        "excerpt":"Recently I migrated my whole blog from the Cayman theme to the Minimal Mistakes theme, which can be found here. This blog post explains how to quickly get up and running with the Minimal Mistakes theme. Before After Setting this is up is ridiculously simple if you know what you’re...","categories": ["blog"],
        "tags": ["Jekyll","update"],
        "url": "http://localhost:4000/blog/how-to-change-theme-to-minimal-mistakes/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "How to Install SSL Certificate on NGINX",
        "excerpt":"1. Generate file .key and .csr Don’t miss to set Common Name as *.mydomain.com because we use GlobalSign Wildcard AlphaSSL. $ openssl req -new -newkey rsa:2048 -nodes -keyout mydomain.com.key -out mydomain.com.csr Generating a 2048 bit RSA private key ...............................................................+++ .....................+++ writing new private key to 'mydomain.com.key' ----- You are about...","categories": ["nginx","server","ssl","security"],
        "tags": [],
        "url": "http://localhost:4000/nginx/server/ssl/security/how-to-install-ssl-certificate-on-nginx/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "Invalid US-ASCII character \"\\xE2\" on line 54 workaround",
        "excerpt":"In this blog post I cover the infamous “Invalid US-ASCII character \"\\xE2\" on line 54” error that seems to plague people when trying to serve their sites locally. OK, I actually don’t fix the problem but I create a workaround. The problem Have you ever ran into this issue? Error:...","categories": ["blog"],
        "tags": ["Jekyll","update"],
        "url": "http://localhost:4000/blog/invalid-US-ASCII-character/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "How to add Latex to Minimal Mistakes",
        "excerpt":"In one of my previous blog posts I show you how to set up the Minimal Mistakes theme for your Github page. In this blog post I show how to add Latex support to your Minimal Mistakes jekyll blog and is largely based on this. Step 1. Set markdown engine...","categories": ["blog"],
        "tags": ["Jekyll","update"],
        "url": "http://localhost:4000/blog/How-to-add-mathjax-to-minimal-mistakes/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "The Maker vs Manager Problem",
        "excerpt":"It’s well known that programmers dislike meetings… a lot. But have you ever wondered why programmers dislike meetings so much compared to other people? The answer is simple but obvious once pointed out: meetings are more costly to them. I’m sure many programmers can relate to this comic. This blog...","categories": ["blog"],
        "tags": ["Jekyll","update"],
        "url": "http://localhost:4000/blog/makers-vs-manager/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "Regex For Noobs (like me!) - An Illustrated Guide",
        "excerpt":"This blog post is an illustrated guide to regex and aims to provide a gentle introduction for people who never have fiddled with regex, want to, but are kind of intimidated by the whole thing. In other words, welcome to … For most people without a formal CS education, regular...","categories": ["blog"],
        "tags": ["Jekyll","update"],
        "url": "http://localhost:4000/blog/regex-for-noobs/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Azure] Introducing Microsoft Azure",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Kenapa saya harus belajar kelas Menjadi Azure Cloud Developer di Era ini? Cloud computing merupakan #1 hard skill yang paling dibutuhkan di era industri 4.0 ini banyak perusahaan yang tertarik dengan engineer yang bisa menghandle tekonologi cloud ini (Sumber). Microsoft Azure luas digunakan di lebih dari...","categories": ["ngoprek","server","cloud"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/server/cloud/intro-azure/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Azure] Membuat Akun Azure for students",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Pada tahap ini kita akan mencoba membuat akun Azure dengan tier free trial nya yang gratis. namun menggunakan Azure for students karena tidak butuh CC (Credit Card) dan mendapatkan $100 dan durasinya selamat 1 tahun setelah habis subscription Azure for students akan di disabled dan akan...","categories": ["ngoprek","server","cloud"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/server/cloud/azure-for-student/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Cisco] Static Routing",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Introduction to Static Routing Static Routing merupakan routing yang pemilihan jalurnya ditetapkan oleh Administratornya sendiri. Static routing ini lebih aman dibanding Dynamic Routing. Kalau membangun jaringan usahakan jika routernya belum terlalu banyak jangan terburu – buru untuk menggunakan Dynamic Routing karena jika menggunakan Dynamic Routing kinerja...","categories": ["network","cisco","routing"],
        "tags": [],
        "url": "http://localhost:4000/network/cisco/routing/cisco-routing-static/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Cisco] Dynamic Routing ",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Introduction to Dynamic Routing Dari sisi penggunaanya Dynamic Routing dan Static Routing tetaplah sama yaitu digunakan untuk menghubungkan 2 atau lebih jaringan yang berbeda. Akan tetapi kalau Static Routing metricnya diatur oleh administrator, berbeda halnya dengan Dynamic Routing, kalau Dynamic Routing metricnya diatur oleh router. Jadi...","categories": ["network","cisco","routing"],
        "tags": [],
        "url": "http://localhost:4000/network/cisco/routing/intro-dynamic-routing/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Docker] Installation Lab Docker (Part 1)",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Persiapkan Lab Node yang akan kita gunakan disini saya menggunakan private cloud yaitu Openstack, dengan 2 Node : pod-pod0 Interface: eth0 IP Address: 10.1.40.12/24 Gateway: 10.1.40.1 DNS Resolver: 10.1.40.1 pod-pod1 Interface: eth0 IP Address: 10.1.40.18/24 Gateway: 10.1.40.1 DNS Resolver: 10.1.40.1 Install Docker ####################### Eksekusi di node...","categories": ["ngoprek","server","cloud","docker","container"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/server/cloud/docker/container/docker-lab1-installation/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Docker] Dockerfile Lab Docker (Part 2)",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Lab selanjutnya kita akan mencoba untuk menjalankan Docker container dengan menggunakan image yang ada di Docker Registry yaitu Docker hub. Eksekusi di node pod-pod0 1. Buka Docker Hub dan cari image whalesay https://hub.docker.com. 2. Jalankan image whalesay sudo docker run docker/whalesay cowsay palopalepalo Docker container dengan...","categories": ["ngoprek","server","cloud","docker","container"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/server/cloud/docker/container/docker-lab2-Dockerfile/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Docker] Volumes Lab Docker (Part 3)",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Lab kali ini kita akan mencoba Volumes, seperti mount file static kedalam container yang sedang berjalan di node local maupun beda node yang berbeda. Eksekusi di node pod-pod0 Volumes 1. Membuat volume &amp; Melihat Detail nya root@pod0:~# sudo docker volume create my-vol my-vol root@pod0:~# docker volume...","categories": ["ngoprek","server","cloud","docker","container"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/server/cloud/docker/container/docker-lab3-volumes/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Docker] Web Kalkulator Lab Docker (Part 4)",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Lab kali ini kita akan mencoba Improve dari lab, jadi kita akan menjalankan web server apache2 yang menjalankan file static kalkulator. dan menggunakan Database SQL untuk RDBMS nya Mysql sebagai penyimpan data user untuk website simabes. Jadi sini kita akan ngorep 2 web sekaligus ! Eksekusi...","categories": ["ngoprek","server","cloud","docker","container"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/server/cloud/docker/container/docker-lab4-quiz1/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Docker] Web Simabes Lab Docker (Part 5)",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Oke meneruskan lab sebelumnya dimana kita membangun web kalkulator sekarang kita mencoba untuk ngoprek Web (Simabes Sistem Informasi Manajemen Bengkel Sederhana) WEB Simabes Ekseskusi di pod-pod1 1. Setting up mysql server nano /etc/mysql/mysql.conf.d/mysqld.cnf Cari bind-address ganti nilainya dari 127.0.0.1 menjadi 0.0.0.0 atau langsung menggunakan IP address...","categories": ["ngoprek","server","cloud","docker","container"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/server/cloud/docker/container/docker-lab5-websimabes/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Docker] Networking Lab Docker (Part 6)",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Lab ini kita akan ngoprek lebih dalam Network yang ada di docker container, b Default Bridge Network Eksekusi di node pod-pod0 1. Menjalankan Container Alpine mengunakan Default Bridge Network dengan shell ash root@pod0:~# docker network ls NETWORK ID NAME DRIVER SCOPE 1448af1458d5 bridge bridge local 9ddfa1d104bd...","categories": ["ngoprek","server","cloud","docker","container"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/server/cloud/docker/container/docker-lab6-networking/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Docker] Docker Compose Lab Docker (Part 7)",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Lab ini kita akan ngoprek Docker menggunakan Compose, bisa di bilang compose ini seperti automation nya docker jadi dengan compose kita bisa membuat container menjadi lebih cepat dan efesien. Default Bridge Network Eksekusi di node pod-pod0 #1. Unduh Compose &amp; Set permisson executable curl -L https://github.com/docker/compose/releases/download/1.20.1...","categories": ["ngoprek","server","cloud","docker","container"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/server/cloud/docker/container/docker-lab7-dockercompose/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Docker] Docker Secret Lab Docker (Part 8)",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Lab ini kita akan mencoba service secret yang ada pada docker Get started with secrets Eksekusi di node pod-pod0 Membuat secret sebelum itu kita harus menyalakan docker swarm docker swarm init printf \"This is a secret\" | docker secret create my_secret_data - root@pod0:~/latihan/my_app# docker swarm init...","categories": ["ngoprek","server","cloud","docker","container"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/server/cloud/docker/container/docker-lab8-secret/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Kubernetes] Kubernetes Initialize Lab k8s (Part 1)",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Lab ini kita akan ngoprek Kubernetes. Saya disini menggunakan public cloud Azure untuk membangun node yang saya butuhkan untuk ngoprek lab ini. berikut list node yang saya gunakan : pod-master Interface: eth0 IP Address: 10.0.0.4/24 Gateway: 10.0.0.1 DNS Resolver: 10.0.0.1 pod-worker Interface: eth0 IP Address: 10.0.0.5/24...","categories": ["ngoprek","server","cloud","docker","container","orchestration"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/server/cloud/docker/container/orchestration/kubernetes-lab1-k8sinstall/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Kubernetes] Deploy Sock-shop Lab k8s (Part 2)",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Lab ini kita akan mendeploy sebuah web toko online (sock-shop) buatan weave network, web ini dibangun microservices dengan kubernetes. Bisa kalian lihat lihat sumber code nya https://github.com/microservices-demo/microservices-demo Deploy Web Sock-shop (Toko Online kaos kaki) Eksekusi di semua pod kubectl create namespace sock-shop kubectl apply -n sock-shop...","categories": ["ngoprek","server","cloud","docker","container","orchestration"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/server/cloud/docker/container/orchestration/kubernetes-lab2-web-sockshop/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Kubernetes] Dashboard Lab k8s (Part 3)",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Oke lab ini kita akan memasang Dashbord mili sii kubernetes Kubernetes Dashboard Eksekusi di pod Master 1. Instal Kubernetes Dashboard mkdir ~/certs kubectl create secret generic kubernetes-dashboard-certs --from-file=$HOME/certs -n kube-system kubectl apply -f https://raw.githubusercontent.com/nolsatuid/labs/master/k9-adm/script/kubernetes-dashboard.yaml kubectl -n kube-system get pods kubectl -n kube-system get svc 2. Set...","categories": ["ngoprek","server","cloud","docker","container","orchestration"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/server/cloud/docker/container/orchestration/kubernetes-lab3-k8s-dashboard/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Kubernetes] APIs Proxy Lab k8s (Part 4)",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Oke lab ini kita akan mencoba APIs. APIs Dengan Proxy Jalankan proxy kubectl proxy &amp; Test akses API curl http://127.0.0.1:8001/ root@pod-master :~# curl http://127.0.0.1:8001/ { \"paths\": [ \"/api\", \"/api/v1\", \"/apis\", \"/apis/\", \"/apis/admissionregistration.k8s.io\", \"/apis/admissionregistration.k8s.io/v1beta1\", \"/apis/apiextensions.k8s.io\", \"/apis/apiextensions.k8s.io/v1beta1\", \"/apis/apiregistration.k8s.io\", \"/apis/apiregistration.k8s.io/v1\", \"/apis/apiregistration.k8s.io/v1beta1\", \"/apis/apps\", \"/apis/apps/v1\", \"/apis/apps/v1beta1\", \"/apis/apps/v1beta2\", \"/apis/authentication.k8s.io\", \"/apis/authentication.k8s.io/v1\", \"/apis/authentication.k8s.io/v1beta1\", \"/apis/authorization.k8s.io\",...","categories": ["ngoprek","server","cloud","docker","container","orchestration"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/server/cloud/docker/container/orchestration/kubernetes-lab4-k8s-APIs/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Kubernetes] Deploying Stand-alone app With CLI Lab k8s (Part 5)",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Sebelumnya kita udah coba deploy app demo yaitu sock-shop nah kali ini kita buat deploy dengan stand-alone. Deploying Stand-Alone Application - CLI 1. Membuat file YAML Deployment webserver.yaml vim webserver.yaml ... apiVersion: extensions/v1beta1 kind: Deployment metadata: name: webserver spec: replicas: 3 template: metadata: labels: app: webserver...","categories": ["ngoprek","server","cloud","docker","container","orchestration"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/server/cloud/docker/container/orchestration/kubernetes-lab5-deploy-stand-alone-app/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Kubernetes] Presistent Volume (PV) & Presistent Volume Claim (PVC) Lab k8s (Part 6)",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم PV &amp; PVC This example describes how to create Web frontend server, an auto-provisioned persistent volume on GCE or Azure, and an NFS-backed persistent claim. Demonstrated Kubernetes Concepts: Persistent Volumes to define persistent disks (disk lifecycle not tied to the Pods). Services to enable Pods to...","categories": ["ngoprek","server","cloud","docker","container","orchestration"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/server/cloud/docker/container/orchestration/kubernetes-lab6-PV&PVC/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Kubernetes] Latihan Deploy Nginx app Lab k8s (Part 6)",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Kali ini kita akan membuat service nginx dengan studi kasus Buat sebuah deployment dengan image nginx versi dan replica 1, nama deployment tersebut adalah nginx-X juga pastikan deployment tersebut dideploy di pod worker kita perlu membuat konfigurasi file untuk deployment dan services vim nginx-latihan.yml ... apiVersion:...","categories": ["ngoprek","server","cloud","docker","container","orchestration"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/server/cloud/docker/container/orchestration/kubernetes-lab7-quiz1/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[FortiGate] Install FortiGate dengan GNS3",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Halo, dalam lab kaliini saya akan menunjukkan kepada kalian cara menambahkan Fortigate ke GNS3, serta cara melakukan konfigurasi jaringannya, dan cara mengakses FortiGate melalui CLI (Command-Line) dan web. Kuy Gaskeun ~ Requirements GNS3 / GNS3VM (Kita pake GNS3) Download FortiGate appliance from Here! Download FortiGate 6.0.0...","categories": ["ngoprek","server","routing","cisco","security"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/server/routing/cisco/security/fortigate-install-fortigate/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Cisco] Konfigurasi Router Cisco dengan telnetlib python",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Halo Sobat ambyarr, di tulisan yang singkat ini saya akan lab penggunaan library telnetlib punya python untuk konfigurasi Router Cisco. Requirements GNS3 / GNS3VM (Kita pake GNS3) Image IOS cisco apa bae saya pake c7200 Disini kita akan memakai applience Network Automation yang tersedia di GNS3...","categories": ["ngoprek","automation","routing","cisco"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/automation/routing/cisco/network-automation-telnetlib/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Fluentd] lab setup Installation fluentd",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Overview Halo Sobat ambyarr, di tulisan kali ini saya akan lab fluentd apa sih itu fluentd? Fluentd adalah pengumpul log open-source yang sepenuhnya gratis dan memungkinkan kita untuk memiliki arsitektur ‘ Log di sekala sistem atau aplikasi yang kita buat ‘ dengan 125+ jenis sistem ....","categories": ["ngoprek","cloud","log","cloud native"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/cloud/log/cloud%20native/fluentd-installation-config/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Fluentd] Logging Apache Web Server Lab Fluentd",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Halo Sobat ambyarr, di tulisan kali ini saya akan melanjutkan lab fluentd. Logging Apache Web Server Install Apache sudo apt install -y apache2 sudo systemctl start apache2 sudo systemctl status apache2 sudo usermod -aG adm td-agent sudo vim /etc/td-agent/td-agent.conf --- &lt;source&gt; @type tail format apache2 tag...","categories": ["ngoprek","cloud","log","cloud native"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/cloud/log/cloud%20native/fluentd-loggin-apache/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Fluentd] Logging Docker Container Lab Fluentd",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Halo Sobat ambyarr, di tulisan kali ini saya akan melanjutkan lab fluentd. Logging Docker Container Install docker sudo apt install apt-transport-https ca-certificates curl software-properties-common curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - sudo add-apt-repository \"deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable\" sudo apt update &amp;&amp; sudo apt install...","categories": ["ngoprek","cloud","log","cloud native"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/cloud/log/cloud%20native/fluentd-logging-docker/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Fluentd] Logging NodeJS Lab Fluentd",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Halo Sobat ambyarr, di tulisan kali ini saya akan melanjutkan lab fluentd. Logging NodeJS Prerequisites Basic knowledge of Node.js and NPM Basic knowledge of Fluentd Node.js 6.0 or higher Install NodeJS sudo apt install npm nodejs -v Make dependencies vim package.json --- { \"name\": \"node-example\", \"version\":...","categories": ["ngoprek","cloud","log","cloud native"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/cloud/log/cloud%20native/fluentd-logging-nodejs/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Fluentd] Monitoring fluentd to prometheus Lab Fluentd",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Halo Sobat ambyar, di tulisan kali ini saya akan melanjutkan lab fluentd. Monitoring fluentd ke prometheus !! Ekseskusi di node0 !! Install prometheus plugin sudo td-agent-gem install fluent-plugin-prometheus Tambahkan konfigurasi td-agent.conf sudo vim /etc/td-agent/td-agent.conf --- &lt;source&gt; @type prometheus bind 0.0.0.0 port 24231 &lt;/source&gt; &lt;filter docker.**&gt; @type...","categories": ["ngoprek","cloud","log","cloud native"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/cloud/log/cloud%20native/fluentd-monitoringwithprometeheuse/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Fluentd] Logging Nginx Web Server dengan Docker Container Lab Fluentd",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Halo Sobat ambyarr, di tulisan kali ini saya akan melanjutkan lab fluentd. Logging Nginx dengan Docker Container Install docker sudo apt install apt-transport-https ca-certificates curl software-properties-common curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - sudo add-apt-repository \"deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable\" sudo apt update &amp;&amp; sudo...","categories": ["ngoprek","cloud","log","cloud native"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/cloud/log/cloud%20native/fluentd-nginx-logging/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Fluentd] Menghitung Jumlah Keseluruhan Records Log Lab fluentd",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Halo Sobat ambyarr, di tulisan kali ini saya akan melanjutkan lab fluentd. menambahkan metric untuk menghitung jumlah keseluruhan records log. sudo systemctl status docker ### Add td-agent.conf ```shell sudo vim /etc/td-agent/td-agent.conf --- # Monitoring fluentd ke prometheus &lt;source&gt; @type prometheus bind 0.0.0.0 port 24231 &lt;/source&gt; &lt;filter...","categories": ["ngoprek","cloud","log","cloud native"],
        "tags": [],
        "url": "http://localhost:4000/ngoprek/cloud/log/cloud%20native/fluentd-jumlah-recordslogs/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[LXC Containers] Installation lab at Ubuntu",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Tentang Linux Containers (LXC dibaca lex-cee) Linux containers merupakan teknologi di level virtualisasi yang sangat ringan. tidak seperti beberapa teknologi level virtualisasi yang lainnya dimana membutuhkan hardware/resource nya sendiri. tidak ada hardware/resource tersendiri untuk membuat container, karena container berbagi kernel yang membuat resources seperti CPU,RAM, Hard...","categories": ["ngoprek","server","cloud","lxc","container"],
        "tags": ["Jekyll","update"],
        "url": "http://localhost:4000/ngoprek/server/cloud/lxc/container/lxc-containers/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[LXC Containers] Play with LXD Container Hypervisor",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Linux Container Hypervisor (LXD dibaca lex-dee) Proyek LXD didirikan dan saat ini dipimpin oleh Canonical Ltd dengan kontribusi dari berbagai perusahaan lain dan kontributor individu. LXD merupakan management sistem container yang lebih user experience. LXD menawarkan penggunakaan mirip dengan teknologi virtual machine tetapi menggunakan Linux container...","categories": ["ngoprek","server","cloud","lxc","container"],
        "tags": ["Jekyll","update"],
        "url": "http://localhost:4000/ngoprek/server/cloud/lxc/container/lxd-containers-hypervisor/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Kubernetes The Hard Way] Setup Lab Kubernetes Jalan Ninjaku",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Kubernetes Jalan Ninjaku (Kubernetes The Hardway) Okrayy pada tutorial kali ini kita akan mengkonfigurasi atau menjalankan kubernetes namun dengan cara the hardway, jadi kita membangun sebuah sistem kubernetes tanpa bantuan automasisasi atau library yang bisa langsung tuiing jdii tuh kebernetes cluster nya semisal minikube dan kubeadm...","categories": ["ngoprek","server","cloud","kubernetes","container"],
        "tags": ["Jekyll","update"],
        "url": "http://localhost:4000/ngoprek/server/cloud/kubernetes/container/kubernetes-setup-lab-kubernetes-jalan-ninjaku/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Kubernetes The Hard Way] Installing Client Tools - Part 1",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Installing Client Tools (Kubernetes The Hardway) Lanjutkeunn, Lab part 1 ini kita akan menyiapkan dari sisi client yaitu HOST OS saya sendiri yang menjalan kan node container k8s nah kita akan menggunakan Public Key Infrastructure Infrastructure Untuk media komunikasi dari sisi client ke tiap node container...","categories": ["ngoprek","server","cloud","kubernetes","container"],
        "tags": ["Jekyll","update"],
        "url": "http://localhost:4000/ngoprek/server/cloud/kubernetes/container/kubernetes-part1/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Kubernetes The Hard Way] Provisioning a CA and Generating TLS Certificates - Part 2",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Provisioning a CA and Generating TLS Certificates (Kubernetes The Hardway) Lanjutkeunn, Lab part 2 Di lab ini Anda akan menyediakan Infrastruktur PKI menggunakan PKI toolkit, cfssl, kemudian menggunakannya untuk mem-bootstrap Otoritas Sertifikat, dan menghasilkan sertifikat TLS untuk komponen berikut: etcd, kube-apiserver, kube-controller-manager, kube-scheduler, kubelet, dan kube-proxy....","categories": ["ngoprek","server","cloud","kubernetes","container"],
        "tags": ["Jekyll","update"],
        "url": "http://localhost:4000/ngoprek/server/cloud/kubernetes/container/kubernetes-part2/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Kubernetes The Hard Way] Generating Kubernetes Configuration Files for Authentication - Part 3",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Generating Kubernetes Configuration Files for Authentication (Kubernetes The Hardway) Lanjutkeunn, Lab part 4 this lab you will generate Kubernetes configuration files, also known as kubeconfigs, which enable Kubernetes clients to locate and authenticate to the Kubernetes API Servers. Kubernetes Public IP Address Each kubeconfig requires a...","categories": ["ngoprek","server","cloud","kubernetes","container"],
        "tags": ["Jekyll","update"],
        "url": "http://localhost:4000/ngoprek/server/cloud/kubernetes/container/kubernetes-part3/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Kubernetes The Hard Way] Generating the Data Encryption Config and Key - Part 4",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Generating the Data Encryption Config and Key (Kubernetes The Hardway) Lanjutkeunn, Lab part 4 Kubernetes stores a variety of data including cluster state, application configurations, and secrets. Kubernetes supports the ability to encrypt cluster data at rest. In this lab you will generate an encryption key...","categories": ["ngoprek","server","cloud","kubernetes","container"],
        "tags": ["Jekyll","update"],
        "url": "http://localhost:4000/ngoprek/server/cloud/kubernetes/container/kubernetes-part4/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Kubernetes The Hard Way] Bootstrapping the etcd Cluster - Part 5",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Bootstrapping the etcd Cluster (Kubernetes The Hardway) Lanjutkeunn, Lab part 5 Kubernetes components are stateless and store cluster state in etcd. In this lab you will bootstrap a three node etcd cluster and configure it for high availability and secure remote access. Prerequisites The commands in...","categories": ["ngoprek","server","cloud","kubernetes","container"],
        "tags": ["Jekyll","update"],
        "url": "http://localhost:4000/ngoprek/server/cloud/kubernetes/container/kubernetes-part5/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Kubernetes The Hard Way] Bootstrapping the Kubernetes Control Plane - Part 6",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Bootstrapping the Kubernetes Control Plane (Kubernetes The Hardway) Lanjutkeunn, Lab part 6 In this lab you will bootstrap the Kubernetes control plane across three compute instances and configure it for high availability. You will also create an external load balancer that exposes the Kubernetes API Servers...","categories": ["ngoprek","server","cloud","kubernetes","container"],
        "tags": ["Jekyll","update"],
        "url": "http://localhost:4000/ngoprek/server/cloud/kubernetes/container/kubernetes-part6/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Kubernetes The Hard Way] Bootstrapping the Kubernetes Worker Nodes - Part 7",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Bootstrapping the Kubernetes Worker Nodes (Kubernetes The Hardway) Lanjutkeunn, Lab part 7 In this lab you will bootstrap three Kubernetes worker nodes. The following components will be installed on each node: runc, gVisor, container networking plugins, containerd, kubelet, and kube-proxy. Prerequisites The commands in this lab...","categories": ["ngoprek","server","cloud","kubernetes","container"],
        "tags": ["Jekyll","update"],
        "url": "http://localhost:4000/ngoprek/server/cloud/kubernetes/container/kubernetes-part7/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Kubernetes The Hard Way] POD Network Routes - Part 8",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم POD Network Routes (Kubernetes The Hardway) Lanjutkeunn, Lab part 8 Pods scheduled to a node receive an IP address from the node’s Pod CIDR range. At this point pods can not communicate with other pods running on different nodes due to missing network routes. In this...","categories": ["ngoprek","server","cloud","kubernetes","container"],
        "tags": ["Jekyll","update"],
        "url": "http://localhost:4000/ngoprek/server/cloud/kubernetes/container/kubernetes-part8/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Kubernetes The Hard Way] Deploying the DNS Cluster Add-on - FinalPart 9",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Deploying the DNS Cluster Add-on (Kubernetes The Hardway) Lanjutkeunn, Lab FinalPart 9 In this lab you will deploy the DNS add-on which provides DNS based service discovery, backed by CoreDNS, to applications running inside the Kubernetes cluster. The DNS Cluster Add-on Deploy the coredns cluster add-on:...","categories": ["ngoprek","server","cloud","kubernetes","container"],
        "tags": ["Jekyll","update"],
        "url": "http://localhost:4000/ngoprek/server/cloud/kubernetes/container/kubernetes-part9/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Security] Deployment Kippo Honeypot On Linux Ubuntu",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Deployment Kippo Honeypot On Linux Ubuntu Honeypot Honeypot merupakan salah satu solusi yang dapat diberikan karena honeypot merupakan sebuah sistem umpan atau aplikasi simulasi yang mensimulasikan seluruh jaringan untuk memikat penyerang dengan menyamarkan diri sebagai sistem yang rentan implementasi Kita bakal menggunakan metode honeypot medium interaction...","categories": ["ngoprek","server","cloud","security"],
        "tags": ["Jekyll","update"],
        "url": "http://localhost:4000/ngoprek/server/cloud/security/Honeypot-kippo/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      },{
        "title": "[Openstack] Integrate CEPH in Kolla OPENSTACK",
        "excerpt":"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم Integrate CEPH in Kolla OPENSTACK CEPH x OPENSTACK Detail Virtual Machine : am-os01 (10.10.176.110) : 8 vCPU, 12 GB RAM, 40 GB HDD1 ,20 GB HDD2 ,20 GB HDD3 ,20 GB HDD4 am-os02 (10.10.176.111) : 8 vCPU, 12 GB RAM, 40 GB HDD1 ,20 GB HDD2...","categories": ["ngoprek","server","cloud","security"],
        "tags": ["Jekyll","update"],
        "url": "http://localhost:4000/ngoprek/server/cloud/security/Integrate-CEPH-in-Kolla-OPENSTACK/",
        "teaser": "http://localhost:4000/assets/images/500x300.jpg"
      }]
