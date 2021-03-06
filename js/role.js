function roleConfig(nga, admin) {

  var role = admin.getEntity('roles');
  var permission = admin.getEntity('permissions');

  role.listView()
    .title('角色')
    .fields([
      nga.field('name').label('名称'),
      nga.field('permissionIds', 'reference_many').label('权限')
        .targetEntity(permission)
        .targetField(nga.field('name'))
    ])
    .actions(['create'])
    .listActions(['edit', 'delete']);

  role.creationView()
    .fields([
      nga.field('name').label('名称')
    ]);

  role.editionView()
    .fields([
      nga.field('name').label('名称'),
      nga.field('permissionIds', 'reference_many').label('权限')
        .targetEntity(permission)
        .targetField(nga.field('name'))
    ]);

}
