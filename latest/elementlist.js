
var ApiGen = ApiGen || {};
ApiGen.elements = [["c","Puli\\Discovery\\AbstractEditableDiscovery"],["c","Puli\\Discovery\\Api\\Binding\\Binding"],["c","Puli\\Discovery\\Api\\Binding\\Initializer\\BindingInitializer"],["c","Puli\\Discovery\\Api\\Binding\\Initializer\\NotInitializedException"],["c","Puli\\Discovery\\Api\\Binding\\NoSuchBindingException"],["c","Puli\\Discovery\\Api\\Discovery"],["c","Puli\\Discovery\\Api\\EditableDiscovery"],["c","Puli\\Discovery\\Api\\Type\\BindingNotAcceptedException"],["c","Puli\\Discovery\\Api\\Type\\BindingParameter"],["c","Puli\\Discovery\\Api\\Type\\BindingType"],["c","Puli\\Discovery\\Api\\Type\\DuplicateTypeException"],["c","Puli\\Discovery\\Api\\Type\\MissingParameterException"],["c","Puli\\Discovery\\Api\\Type\\NoSuchParameterException"],["c","Puli\\Discovery\\Api\\Type\\NoSuchTypeException"],["c","Puli\\Discovery\\Binding\\AbstractBinding"],["c","Puli\\Discovery\\Binding\\ClassBinding"],["c","Puli\\Discovery\\Binding\\Initializer\\ResourceBindingInitializer"],["c","Puli\\Discovery\\Binding\\ResourceBinding"],["c","Puli\\Discovery\\InMemoryDiscovery"],["c","Puli\\Discovery\\KeyValueStoreDiscovery"],["c","Puli\\Discovery\\NullDiscovery"],["c","Puli\\Factory\\PuliFactory"],["c","Puli\\Manager\\Api\\AlreadyLoadedException"],["c","Puli\\Manager\\Api\\Asset\\AssetManager"],["c","Puli\\Manager\\Api\\Asset\\AssetMapping"],["c","Puli\\Manager\\Api\\Asset\\DuplicateAssetMappingException"],["c","Puli\\Manager\\Api\\Asset\\NoSuchAssetMappingException"],["c","Puli\\Manager\\Api\\Config\\Config"],["c","Puli\\Manager\\Api\\Config\\ConfigFile"],["c","Puli\\Manager\\Api\\Config\\ConfigFileManager"],["c","Puli\\Manager\\Api\\Config\\ConfigFileSerializer"],["c","Puli\\Manager\\Api\\Config\\ConfigManager"],["c","Puli\\Manager\\Api\\Config\\NoSuchConfigKeyException"],["c","Puli\\Manager\\Api\\Context\\Context"],["c","Puli\\Manager\\Api\\Context\\ProjectContext"],["c","Puli\\Manager\\Api\\Discovery\\BindingDescriptor"],["c","Puli\\Manager\\Api\\Discovery\\BindingState"],["c","Puli\\Manager\\Api\\Discovery\\BindingTypeDescriptor"],["c","Puli\\Manager\\Api\\Discovery\\BindingTypeState"],["c","Puli\\Manager\\Api\\Discovery\\DiscoveryManager"],["c","Puli\\Manager\\Api\\Discovery\\DiscoveryNotEmptyException"],["c","Puli\\Manager\\Api\\Discovery\\DuplicateBindingException"],["c","Puli\\Manager\\Api\\Discovery\\DuplicateTypeException"],["c","Puli\\Manager\\Api\\Discovery\\NoSuchBindingException"],["c","Puli\\Manager\\Api\\Discovery\\NoSuchTypeException"],["c","Puli\\Manager\\Api\\Discovery\\TypeNotEnabledException"],["c","Puli\\Manager\\Api\\Environment"],["c","Puli\\Manager\\Api\\Event\\AddAssetMappingEvent"],["c","Puli\\Manager\\Api\\Event\\BuildRepositoryEvent"],["c","Puli\\Manager\\Api\\Event\\GenerateFactoryEvent"],["c","Puli\\Manager\\Api\\Event\\PuliEvents"],["c","Puli\\Manager\\Api\\Event\\RemoveAssetMappingEvent"],["c","Puli\\Manager\\Api\\Factory\\FactoryManager"],["c","Puli\\Manager\\Api\\Factory\\Generator\\GeneratorRegistry"],["c","Puli\\Manager\\Api\\Factory\\Generator\\ServiceGenerator"],["c","Puli\\Manager\\Api\\FileNotFoundException"],["c","Puli\\Manager\\Api\\Installation\\InstallationManager"],["c","Puli\\Manager\\Api\\Installation\\InstallationParams"],["c","Puli\\Manager\\Api\\Installation\\NotInstallableException"],["c","Puli\\Manager\\Api\\Installer\\InstallerDescriptor"],["c","Puli\\Manager\\Api\\Installer\\InstallerManager"],["c","Puli\\Manager\\Api\\Installer\\InstallerParameter"],["c","Puli\\Manager\\Api\\Installer\\NoSuchInstallerException"],["c","Puli\\Manager\\Api\\Installer\\NoSuchParameterException"],["c","Puli\\Manager\\Api\\Installer\\ResourceInstaller"],["c","Puli\\Manager\\Api\\Installer\\Validation\\ConstraintViolation"],["c","Puli\\Manager\\Api\\Installer\\Validation\\InstallerParameterValidator"],["c","Puli\\Manager\\Api\\InvalidConfigException"],["c","Puli\\Manager\\Api\\Migration\\MigrationException"],["c","Puli\\Manager\\Api\\NoDirectoryException"],["c","Puli\\Manager\\Api\\NonRootPackageExpectedException"],["c","Puli\\Manager\\Api\\NotLoadedException"],["c","Puli\\Manager\\Api\\Package\\InstallInfo"],["c","Puli\\Manager\\Api\\Package\\NameConflictException"],["c","Puli\\Manager\\Api\\Package\\NoSuchPackageException"],["c","Puli\\Manager\\Api\\Package\\Package"],["c","Puli\\Manager\\Api\\Package\\PackageCollection"],["c","Puli\\Manager\\Api\\Package\\PackageFile"],["c","Puli\\Manager\\Api\\Package\\PackageFileSerializer"],["c","Puli\\Manager\\Api\\Package\\PackageManager"],["c","Puli\\Manager\\Api\\Package\\PackageState"],["c","Puli\\Manager\\Api\\Package\\RootPackage"],["c","Puli\\Manager\\Api\\Package\\RootPackageFile"],["c","Puli\\Manager\\Api\\Package\\RootPackageFileManager"],["c","Puli\\Manager\\Api\\Package\\UnsupportedVersionException"],["c","Puli\\Manager\\Api\\Php\\Argument"],["c","Puli\\Manager\\Api\\Php\\Clazz"],["c","Puli\\Manager\\Api\\Php\\Import"],["c","Puli\\Manager\\Api\\Php\\Method"],["c","Puli\\Manager\\Api\\Php\\ReturnValue"],["c","Puli\\Manager\\Api\\Puli"],["c","Puli\\Manager\\Api\\PuliPlugin"],["c","Puli\\Manager\\Api\\Repository\\DuplicatePathMappingException"],["c","Puli\\Manager\\Api\\Repository\\NoSuchPathMappingException"],["c","Puli\\Manager\\Api\\Repository\\PathConflict"],["c","Puli\\Manager\\Api\\Repository\\PathMapping"],["c","Puli\\Manager\\Api\\Repository\\PathMappingState"],["c","Puli\\Manager\\Api\\Repository\\RepositoryManager"],["c","Puli\\Manager\\Api\\Server\\NoSuchServerException"],["c","Puli\\Manager\\Api\\Server\\Server"],["c","Puli\\Manager\\Api\\Server\\ServerCollection"],["c","Puli\\Manager\\Api\\Server\\ServerManager"],["c","Puli\\Manager\\Api\\Storage\\Storage"],["c","Puli\\Manager\\Api\\Storage\\StorageException"],["c","Puli\\Manager\\Assert\\Assert"],["c","Puli\\Manager\\Asset\\DiscoveryAssetManager"],["c","Puli\\Manager\\Config\\AbstractConfigManager"],["c","Puli\\Manager\\Config\\ConfigFileManagerImpl"],["c","Puli\\Manager\\Config\\ConfigFileStorage"],["c","Puli\\Manager\\Config\\ConfigJsonSerializer"],["c","Puli\\Manager\\Config\\DefaultConfig"],["c","Puli\\Manager\\Config\\EnvConfig"],["c","Puli\\Manager\\Conflict\\CyclicDependencyException"],["c","Puli\\Manager\\Conflict\\OverrideGraph"],["c","Puli\\Manager\\Conflict\\PackageConflict"],["c","Puli\\Manager\\Conflict\\PackageConflictDetector"],["c","Puli\\Manager\\Conflict\\PackageConflictException"],["c","Puli\\Manager\\Discovery\\Binding\\AbstractReloadBindingDescriptors"],["c","Puli\\Manager\\Discovery\\Binding\\AddBinding"],["c","Puli\\Manager\\Discovery\\Binding\\AddBindingDescriptorToPackageFile"],["c","Puli\\Manager\\Discovery\\Binding\\BindingDescriptorCollection"],["c","Puli\\Manager\\Discovery\\Binding\\DisableBindingUuid"],["c","Puli\\Manager\\Discovery\\Binding\\EnableBindingUuid"],["c","Puli\\Manager\\Discovery\\Binding\\LoadBindingDescriptor"],["c","Puli\\Manager\\Discovery\\Binding\\ReloadBindingDescriptorsByTypeName"],["c","Puli\\Manager\\Discovery\\Binding\\ReloadBindingDescriptorsByUuid"],["c","Puli\\Manager\\Discovery\\Binding\\RemoveBindingDescriptorFromPackageFile"],["c","Puli\\Manager\\Discovery\\Binding\\SyncBindingUuid"],["c","Puli\\Manager\\Discovery\\Binding\\UnloadBindingDescriptor"],["c","Puli\\Manager\\Discovery\\DiscoveryManagerImpl"],["c","Puli\\Manager\\Discovery\\Type\\AddBindingType"],["c","Puli\\Manager\\Discovery\\Type\\AddTypeDescriptorToPackageFile"],["c","Puli\\Manager\\Discovery\\Type\\BindingTypeDescriptorCollection"],["c","Puli\\Manager\\Discovery\\Type\\LoadTypeDescriptor"],["c","Puli\\Manager\\Discovery\\Type\\RemoveTypeDescriptorFromPackageFile"],["c","Puli\\Manager\\Discovery\\Type\\SyncTypeName"],["c","Puli\\Manager\\Discovery\\Type\\UnloadTypeDescriptor"],["c","Puli\\Manager\\Discovery\\Type\\UpdateDuplicateMarksForTypeName"],["c","Puli\\Manager\\Factory\\FactoryManagerImpl"],["c","Puli\\Manager\\Factory\\Generator\\DefaultGeneratorRegistry"],["c","Puli\\Manager\\Factory\\Generator\\Discovery\\KeyValueStoreDiscoveryGenerator"],["c","Puli\\Manager\\Factory\\Generator\\KeyValueStore\\ArrayStoreGenerator"],["c","Puli\\Manager\\Factory\\Generator\\KeyValueStore\\JsonFileStoreGenerator"],["c","Puli\\Manager\\Factory\\Generator\\KeyValueStore\\NullStoreGenerator"],["c","Puli\\Manager\\Factory\\Generator\\KeyValueStore\\PhpRedisStoreGenerator"],["c","Puli\\Manager\\Factory\\Generator\\KeyValueStore\\PredisStoreGenerator"],["c","Puli\\Manager\\Factory\\Generator\\KeyValueStore\\RiakStoreGenerator"],["c","Puli\\Manager\\Factory\\Generator\\Repository\\FilesystemRepositoryGenerator"],["c","Puli\\Manager\\Factory\\Generator\\Repository\\PathMappingRepositoryGenerator"],["c","Puli\\Manager\\Filesystem\\FilesystemStorage"],["c","Puli\\Manager\\Installation\\InstallationManagerImpl"],["c","Puli\\Manager\\Installer\\CopyInstaller"],["c","Puli\\Manager\\Installer\\PackageFileInstallerManager"],["c","Puli\\Manager\\Installer\\SymlinkInstaller"],["c","Puli\\Manager\\Migration\\JsonMigration"],["c","Puli\\Manager\\Migration\\MigrationManager"],["c","Puli\\Manager\\Package\\PackageFileStorage"],["c","Puli\\Manager\\Package\\PackageJsonSerializer"],["c","Puli\\Manager\\Package\\PackageManagerImpl"],["c","Puli\\Manager\\Package\\RootPackageFileManagerImpl"],["c","Puli\\Manager\\Php\\ClassWriter"],["c","Puli\\Manager\\Repository\\Mapping\\AddPathMappingToPackageFile"],["c","Puli\\Manager\\Repository\\Mapping\\ConflictCollection"],["c","Puli\\Manager\\Repository\\Mapping\\LoadPathMapping"],["c","Puli\\Manager\\Repository\\Mapping\\OverrideConflictingPackages"],["c","Puli\\Manager\\Repository\\Mapping\\PathMappingCollection"],["c","Puli\\Manager\\Repository\\Mapping\\PopulateRepository"],["c","Puli\\Manager\\Repository\\Mapping\\RemovePathMappingFromPackageFile"],["c","Puli\\Manager\\Repository\\Mapping\\SyncRepositoryPath"],["c","Puli\\Manager\\Repository\\Mapping\\UnloadPathMapping"],["c","Puli\\Manager\\Repository\\Mapping\\UpdateConflicts"],["c","Puli\\Manager\\Repository\\RepositoryManagerImpl"],["c","Puli\\Manager\\Server\\PackageFileServerManager"],["c","Puli\\Manager\\Transaction\\AtomicOperation"],["c","Puli\\Manager\\Transaction\\InterceptedOperation"],["c","Puli\\Manager\\Transaction\\OperationInterceptor"],["c","Puli\\Manager\\Transaction\\Transaction"],["c","Puli\\Manager\\Util\\DistinguishedName"],["c","Puli\\Manager\\Util\\System"],["c","Puli\\Manager\\Util\\TwoDimensionalHashMap"],["c","Puli\\Repository\\AbstractPathMappingRepository"],["c","Puli\\Repository\\AbstractRepository"],["c","Puli\\Repository\\Api\\EditableRepository"],["c","Puli\\Repository\\Api\\Resource\\BodyResource"],["c","Puli\\Repository\\Api\\Resource\\FilesystemResource"],["c","Puli\\Repository\\Api\\Resource\\Resource"],["c","Puli\\Repository\\Api\\Resource\\ResourceMetadata"],["c","Puli\\Repository\\Api\\ResourceCollection"],["c","Puli\\Repository\\Api\\ResourceIterator"],["c","Puli\\Repository\\Api\\ResourceNotFoundException"],["c","Puli\\Repository\\Api\\ResourceRepository"],["c","Puli\\Repository\\Api\\UnsupportedLanguageException"],["c","Puli\\Repository\\Api\\UnsupportedOperationException"],["c","Puli\\Repository\\Api\\UnsupportedResourceException"],["c","Puli\\Repository\\FilesystemRepository"],["c","Puli\\Repository\\InMemoryRepository"],["c","Puli\\Repository\\NullRepository"],["c","Puli\\Repository\\OptimizedPathMappingRepository"],["c","Puli\\Repository\\PathMappingRepository"],["c","Puli\\Repository\\RepositoryFactoryException"],["c","Puli\\Repository\\Resource\\AbstractFilesystemResource"],["c","Puli\\Repository\\Resource\\Collection\\ArrayResourceCollection"],["c","Puli\\Repository\\Resource\\Collection\\FilesystemResourceCollection"],["c","Puli\\Repository\\Resource\\Collection\\LazyResourceCollection"],["c","Puli\\Repository\\Resource\\DirectoryResource"],["c","Puli\\Repository\\Resource\\FileResource"],["c","Puli\\Repository\\Resource\\GenericResource"],["c","Puli\\Repository\\Resource\\Iterator\\RecursiveResourceIterator"],["c","Puli\\Repository\\Resource\\Iterator\\RecursiveResourceIteratorIterator"],["c","Puli\\Repository\\Resource\\Iterator\\ResourceCollectionIterator"],["c","Puli\\Repository\\Resource\\Iterator\\ResourceFilterIterator"],["c","Puli\\Repository\\Resource\\LinkResource"],["c","Puli\\Repository\\Resource\\Metadata\\FilesystemMetadata"],["c","Puli\\Repository\\StreamWrapper\\ResourceStreamWrapper"],["c","Puli\\Repository\\StreamWrapper\\StreamWrapper"],["c","Puli\\Repository\\StreamWrapper\\StreamWrapperException"],["c","Puli\\Repository\\Uri\\InvalidUriException"],["c","Puli\\Repository\\Uri\\Uri"],["c","Puli\\SymfonyBridge\\Config\\ChainableFileLocator"],["c","Puli\\SymfonyBridge\\Config\\ChainableFileLocatorImpl"],["c","Puli\\SymfonyBridge\\Config\\FileLocatorChain"],["c","Puli\\SymfonyBridge\\Config\\PuliFileLocator"],["c","Puli\\SymfonyBridge\\HttpKernel\\ChainableKernelFileLocator"],["c","Puli\\SymfonyBundle\\DependencyInjection\\Compiler\\TwigLoaderPass"],["c","Puli\\SymfonyBundle\\DependencyInjection\\Configuration"],["c","Puli\\SymfonyBundle\\DependencyInjection\\PuliExtension"],["c","Puli\\SymfonyBundle\\PuliBundle"],["c","Puli\\SymfonyBundle\\Tests\\ContainerTest"],["c","Puli\\TwigExtension\\CacheWarmer\\TwigTemplateCacheWarmer"],["c","Puli\\TwigExtension\\Node\\LoadedByPuliNode"],["c","Puli\\TwigExtension\\NodeVisitor\\AbstractPathResolver"],["c","Puli\\TwigExtension\\NodeVisitor\\PuliDirTagger"],["c","Puli\\TwigExtension\\NodeVisitor\\TemplatePathResolver"],["c","Puli\\TwigExtension\\PuliExtension"],["c","Puli\\TwigExtension\\PuliTemplateLoader"],["c","Puli\\TwigExtension\\TokenParser\\LoadedByPuliTokenParser"],["c","Puli\\UrlGenerator\\Api\\CannotGenerateUrlException"],["c","Puli\\UrlGenerator\\Api\\UrlGenerator"],["c","Puli\\UrlGenerator\\DiscoveryUrlGenerator"]];
