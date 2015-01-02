# [Apache Avro](http://avro.apache.org/)
Apache Avro™  is a data serialization system that according to the Apache website provides:
+ Rich data structures.
+ A compact, fast binary data format
+ A container file to store persistent data.
+ Remote procedure call (RPC)
+ Simple integration with dynamic languages.

Other examples of serialization systems are [Thrift](http://thrift.apache.org/) and [Protocol Buffers](https://code.google.com/p/protobuf/)

### Setting Up Apache Avro for Python
1. Install Python

+ Set up [Virtual Environment](http://docs.python-guide.org/en/latest/dev/virtualenvs/) for Python

+ Install [Snappy C library](https://code.google.com/p/snappy/) using a package manager
+ DEB-based: `sudo apt install libsnappy-dev`
+ RPM-based: `sudo yum install libsnappy-devel`

+ Install Snappy for Python: `pip install python-snappy`

+ Install Python Avro
+ From source:
```bash
git clone https://github.com/apache/avro.git
cd avro/lang/py
python setup.py install
```

+ Install using pip or easy_install:
`pip install avro` or
`easy_install avro`

+ Test Avro Installation
