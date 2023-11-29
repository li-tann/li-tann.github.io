---
title: ftp
---

## paramiko

```python
import paramiko

Hostname = "172.1.0.0"
post = 21
Username = "usrnm"
Password = "pswd"

client = paramiko.Transport((Hostname,post))
client.connect( username=Username,password=Password)
sftp = paramiko.SFTPClient.from_transport(client)

sftp.chdir("/home/share_file/")
directory_structure = sftp.listdir_attr()

# Print data
for attr in directory_structure:
    print(attr.filename, attr)

# ......

```
