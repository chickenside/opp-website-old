ls *jpg|sed 's/.jpg//g'|awk -F: '{print "<a href=\"gallery-img/"$1".jpg\" title=\""$1"\" data-gallery><img src=\"thumbnails/"$1".jpg\" alt=\""$1"\"></a>"}'
