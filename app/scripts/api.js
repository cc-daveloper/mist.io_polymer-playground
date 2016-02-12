var Mist = {
  clouds: [{
    id: "29rGxvmKcwaRHkXwZkc2hByxcGmq",
    provider: "packet",
    title: "Packet.net",
    enabled: true,
    machines: [{
      id: "6f3e3c37-6ab3-40f2-9509-17d7d05e393d",
      name: "kvm-again",
      state: "running",
      uuid: "b731a90760bf447e888997e3b55b9f179e8f238b",
      cloud: {
        id: "29rGxvmKcwaRHkXwZkc2hByxcGmq",
        provider: "packet",
        title: "Packet.net",
        enabled: true
      }
    }]
  }, {
    id: "vYfxbj8HHbkFSGtE9AuZzqhCxFz",
    provider: "bare_metal",
    title: "google.gr",
    enabled: true,
    machines: [{
      id: "googlegr",
      name: "google.gr",
      state: "running",
      uuid: "bfd05905e05b55ddaa120e8a0e3b8e954244ad3d",
      cloud: {
        id: "vYfxbj8HHbkFSGtE9AuZzqhCxFz",
        provider: "bare_metal",
        title: "google.gr",
        enabled: true
      }
    }]
  }, {
    id: "vYfxbj8HHbkFSGtE9AuZzqhCxF1",
    provider: "bare_metal",
    title: "test",
    enabled: true,
    machines: [{
      id: "test",
      name: "test",
      state: "running",
      uuid: "bfd05905e05b55ddaa120e8a0e3b8e954244ad3d",
      cloud: {
        id: "vYfxbj8HHbkFSGtE9AuZzqhCxF1",
        provider: "bare_metal",
        title: "test",
        enabled: true
      }
    }]
  }, {
    id: "vYfxbj8HHbkFSGtE9AuZzqhCxF2",
    provider: "nephoscale",
    title: "Nephoscale",
    enabled: true,
    machines: [{
      id: "jenkinsmaster",
      name: "jenkinsmaster",
      state: "running",
      uuid: "bfd05905e05b55ddaa120e8a0e3b8e954244ad31",
      cloud: {
        id: "vYfxbj8HHbkFSGtE9AuZzqhCxF2",
        provider: "nephoscale",
        title: "Nephoscale",
        enabled: true
      }
    }, {
      id: "echelon-mist-io",
      name: "echelon-mist-io",
      state: "running",
      uuid: "bfd05905e05b55ddaa120e8a0e3b8e954244ad32",
      cloud: {
        id: "vYfxbj8HHbkFSGtE9AuZzqhCxF2",
        provider: "nephoscale",
        title: "Nephoscale",
        enabled: true
      }
    }, {
      id: "openstackaki",
      name: "openstackaki",
      state: "running",
      uuid: "bfd05905e05b55ddaa120e8a0e3b8e954244ad33",
      cloud: {
        id: "vYfxbj8HHbkFSGtE9AuZzqhCxF2",
        provider: "nephoscale",
        title: "Nephoscale",
        enabled: true
      }
    }]
  }, {
    id: "vYfxbj8HHbkFSGtE9AuZzqhCxF3",
    provider: "ec2_eu_west",
    title: "EC2 Ireland",
    enabled: true,
    machines: [{
      id: "i-4d7cbee1",
      name: "marios-monitoring",
      state: "running",
      uuid: "bfd05905e05b55ddaa120e8a0e3b8e954244ad3d",
      cloud: {
        id: "vYfxbj8HHbkFSGtE9AuZzqhCxF3",
        provider: "ec2_eu_west",
        title: "EC2 Ireland",
        enabled: true
      }
    }]
  }, {
    id: "vYfxbj8HHbkFSGtE9AuZzqhCxF4",
    provider: "openstack",
    title: "Openstack",
    enabled: false,
    machines: [{
      id: "6f3e3c37-6ab3-40f2-9509-17d7d05e3931",
      name: "6f3e3c37-6ab3-40f2-9509-17d7d05e393d",
      state: "error",
      uuid: "bfd05905e05b55ddaa120e8a0e3b8e954244ad31",
      cloud: {
        id: "vYfxbj8HHbkFSGtE9AuZzqhCxF4",
        provider: "openstack",
        title: "Openstack",
        enabled: false
      }
    }, {
      id: "6f3e3c37-6ab3-40f2-9509-17d7d05e3932",
      name: "demo",
      state: "stopped",
      uuid: "bfd05905e05b55ddaa120e8a0e3b8e954244ad32",
      cloud: {
        id: "vYfxbj8HHbkFSGtE9AuZzqhCxF4",
        provider: "openstack",
        title: "Openstack",
        enabled: false
      }
    }]
  }],
  keys: [{
    id: "test2",
    isDefault: false
  }, {
    id: "primary",
    isDefault: true
  }, {
    id: "kvm",
    isDefault: false
  }],
  scripts: [{
    description: "",
    entrypoint: "",
    id: "448082e761c94660acfe54427c5ca461",
    name: "test",
    script: "#!/bin/bash\necho 'hello world '",
    source: "inline",
    type: "executable",
    user: "marios@mist.io",
  }, {
    description: "test",
    entrypoint: "",
    id: "576bf98fe7e14d87b2b9075f099eeebe",
    name: "runner",
    script: "owner/repo",
    source: "github",
    type: "executable",
    user: "marios@mist.io"
  }],
  networks: [{
    domain_type: 0,
    id: "59887",
    is_default: true,
    name: "default_public_network",
    subnets: [],
    cloud: {
      id: "418XPpTRLsNEpJeJ62jnGs8z7VJu",
      title: "Nephoscale",
      provider: "nephoscale",
      enabled: true
    }
  }, {
    domain_type: 1,
    id: "59889",
    is_default: true,
    name: "default_private_network",
    subnets: [],
    cloud: {
      id: "418XPpTRLsNEpJeJ62jnGs8z7VJu",
      title: "Nephoscale",
      provider: "nephoscale",
      enabled: true
    }
  }, {
    dhcp_options_id: "dopt-3e35ea5b",
    id: "vpc-c20824a7",
    instance_tenancy: "default",
    is_default: false,
    name: "vpc-c20824a7",
    state: "available",
    subnets: [],
    cloud: {
      id: "d98cBYrPqjpAcybzriwznme1a9d",
      title: "EC2 Ireland",
      provider: "ec2_eu_west",
      enabled: true
    }
  }, {
    id: "ad3da031-634c-4606-a790-524b0dfb5783",
    name: "public",
    public: true,
    router_external: true,
    subnets: [],
    status: "ACTIVE",
    cloud: {
      id: "Lyx7GdQXyLi7RqKb3vehY4Y3y2c",
      title: "Openstack",
      provider: "openstack",
      enabled: true
    }
  }, {
    id: "020a9a4d-fbf3-4a5c-862e-3dec9bc48341",
    name: "test",
    public: false,
    router_external: false,
    subnets: [],
    status: "ACTIVE",
    cloud: {
      id: "Lyx7GdQXyLi7RqKb3vehY4Y3y2c",
      title: "Openstack",
      provider: "openstack",
      enabled: true
    }
  }, {
    id: "20322be8-66e6-4669-af4c-2caefa0391bc",
    name: "papaki",
    public: false,
    router_external: false,
    subnets: [],
    status: "ACTIVE",
    cloud: {
      id: "Lyx7GdQXyLi7RqKb3vehY4Y3y2c",
      title: "Openstack",
      provider: "openstack",
      enabled: true
    }
  }]
};
