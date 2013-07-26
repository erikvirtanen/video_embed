#!/usr/bin/python 
#
import cgi
from sys import path

path.append("youtube-dl")
import youtube_dl

form = cgi.FieldStorage()
if "url" not in form:
    print( "ERROR: Url not sent");
    exit;
#print "URL:", form["url"].value

videoUrl = form["url"].value;

print "Content-Type: video/mp4"
print  
youtube_dl.main(["-q", videoUrl])

def getFilenameFromUrl(url):
    pass
