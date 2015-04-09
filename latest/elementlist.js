
var ApiGen = ApiGen || {};
ApiGen.elements = [["c","Puli\\AssetPlugin\\Api\\Asset\\AssetManager"],["c","Puli\\AssetPlugin\\Api\\Asset\\AssetMapping"],["c","Puli\\AssetPlugin\\Api\\Asset\\NoSuchAssetMappingException"],["c","Puli\\AssetPlugin\\Api\\AssetPlugin"],["c","Puli\\AssetPlugin\\Api\\Factory\\UrlGeneratorFactory"],["c","Puli\\AssetPlugin\\Api\\Installation\\InstallationManager"],["c","Puli\\AssetPlugin\\Api\\Installation\\InstallationParams"],["c","Puli\\AssetPlugin\\Api\\Installation\\NotInstallableException"],["c","Puli\\AssetPlugin\\Api\\Installer\\InstallerDescriptor"],["c","Puli\\AssetPlugin\\Api\\Installer\\InstallerManager"],["c","Puli\\AssetPlugin\\Api\\Installer\\InstallerParameter"],["c","Puli\\AssetPlugin\\Api\\Installer\\NoSuchInstallerException"],["c","Puli\\AssetPlugin\\Api\\Installer\\NoSuchParameterException"],["c","Puli\\AssetPlugin\\Api\\Installer\\ResourceInstaller"],["c","Puli\\AssetPlugin\\Api\\Installer\\Validation\\ConstraintViolation"],["c","Puli\\AssetPlugin\\Api\\Installer\\Validation\\InstallerParameterValidator"],["c","Puli\\AssetPlugin\\Api\\Target\\InstallTarget"],["c","Puli\\AssetPlugin\\Api\\Target\\InstallTargetCollection"],["c","Puli\\AssetPlugin\\Api\\Target\\InstallTargetManager"],["c","Puli\\AssetPlugin\\Api\\Target\\NoSuchTargetException"],["c","Puli\\AssetPlugin\\Api\\UrlGenerator\\AssetUrlGenerator"],["c","Puli\\AssetPlugin\\Api\\UrlGenerator\\CannotGenerateUrlException"],["c","Puli\\AssetPlugin\\Asset\\DiscoveryAssetManager"],["c","Puli\\AssetPlugin\\Console\\AssetCommandHandler"],["c","Puli\\AssetPlugin\\Console\\InstallerCommandHandler"],["c","Puli\\AssetPlugin\\Console\\TargetCommandHandler"],["c","Puli\\AssetPlugin\\Console\\WebConsoleConfig"],["c","Puli\\AssetPlugin\\Factory\\CreateUrlGeneratorMethodGenerator"],["c","Puli\\AssetPlugin\\Installation\\InstallationManagerImpl"],["c","Puli\\AssetPlugin\\Installer\\CopyInstaller"],["c","Puli\\AssetPlugin\\Installer\\PackageFileInstallerManager"],["c","Puli\\AssetPlugin\\Installer\\SymlinkInstaller"],["c","Puli\\AssetPlugin\\Target\\PackageFileInstallTargetManager"],["c","Puli\\AssetPlugin\\UrlGenerator\\DiscoveryUrlGenerator"],["c","Puli\\Discovery\\AbstractEditableDiscovery"],["c","Puli\\Discovery\\Api\\Binding\\BindingParameter"],["c","Puli\\Discovery\\Api\\Binding\\BindingType"],["c","Puli\\Discovery\\Api\\Binding\\MissingParameterException"],["c","Puli\\Discovery\\Api\\Binding\\NoSuchParameterException"],["c","Puli\\Discovery\\Api\\Binding\\ResourceBinding"],["c","Puli\\Discovery\\Api\\DuplicateTypeException"],["c","Puli\\Discovery\\Api\\EditableDiscovery"],["c","Puli\\Discovery\\Api\\NoSuchTypeException"],["c","Puli\\Discovery\\Api\\ResourceDiscovery"],["c","Puli\\Discovery\\Api\\Validation\\ConstraintViolation"],["c","Puli\\Discovery\\Api\\Validation\\ParameterValidator"],["c","Puli\\Discovery\\Binding\\AbstractBinding"],["c","Puli\\Discovery\\Binding\\EagerBinding"],["c","Puli\\Discovery\\Binding\\LazyBinding"],["c","Puli\\Discovery\\InMemoryDiscovery"],["c","Puli\\Discovery\\KeyValueStoreDiscovery"],["c","Puli\\Discovery\\NullDiscovery"],["c","Puli\\Discovery\\Validation\\SimpleParameterValidator"],["c","Puli\\Factory\\PuliFactory"],["c","Puli\\Manager\\Api\\AlreadyLoadedException"],["c","Puli\\Manager\\Api\\Config\\Config"],["c","Puli\\Manager\\Api\\Config\\ConfigFile"],["c","Puli\\Manager\\Api\\Config\\ConfigFileManager"],["c","Puli\\Manager\\Api\\Config\\ConfigFileReader"],["c","Puli\\Manager\\Api\\Config\\ConfigFileWriter"],["c","Puli\\Manager\\Api\\Config\\NoSuchConfigKeyException"],["c","Puli\\Manager\\Api\\Discovery\\BindingDescriptor"],["c","Puli\\Manager\\Api\\Discovery\\BindingParameterDescriptor"],["c","Puli\\Manager\\Api\\Discovery\\BindingState"],["c","Puli\\Manager\\Api\\Discovery\\BindingTypeDescriptor"],["c","Puli\\Manager\\Api\\Discovery\\BindingTypeState"],["c","Puli\\Manager\\Api\\Discovery\\CannotDisableBindingException"],["c","Puli\\Manager\\Api\\Discovery\\CannotEnableBindingException"],["c","Puli\\Manager\\Api\\Discovery\\DiscoveryManager"],["c","Puli\\Manager\\Api\\Discovery\\DiscoveryNotEmptyException"],["c","Puli\\Manager\\Api\\Discovery\\DuplicateBindingException"],["c","Puli\\Manager\\Api\\Discovery\\NoSuchBindingException"],["c","Puli\\Manager\\Api\\Discovery\\TypeNotEnabledException"],["c","Puli\\Manager\\Api\\Environment\\GlobalEnvironment"],["c","Puli\\Manager\\Api\\Environment\\ProjectEnvironment"],["c","Puli\\Manager\\Api\\Event\\GenerateFactoryEvent"],["c","Puli\\Manager\\Api\\Event\\PuliEvents"],["c","Puli\\Manager\\Api\\Factory\\FactoryManager"],["c","Puli\\Manager\\Api\\Factory\\Generator\\GeneratorRegistry"],["c","Puli\\Manager\\Api\\Factory\\Generator\\ServiceGenerator"],["c","Puli\\Manager\\Api\\FileNotFoundException"],["c","Puli\\Manager\\Api\\InvalidConfigException"],["c","Puli\\Manager\\Api\\IOException"],["c","Puli\\Manager\\Api\\NoDirectoryException"],["c","Puli\\Manager\\Api\\NotLoadedException"],["c","Puli\\Manager\\Api\\Package\\InstallInfo"],["c","Puli\\Manager\\Api\\Package\\NameConflictException"],["c","Puli\\Manager\\Api\\Package\\NoSuchPackageException"],["c","Puli\\Manager\\Api\\Package\\Package"],["c","Puli\\Manager\\Api\\Package\\PackageCollection"],["c","Puli\\Manager\\Api\\Package\\PackageFile"],["c","Puli\\Manager\\Api\\Package\\PackageFileReader"],["c","Puli\\Manager\\Api\\Package\\PackageFileWriter"],["c","Puli\\Manager\\Api\\Package\\PackageManager"],["c","Puli\\Manager\\Api\\Package\\PackageState"],["c","Puli\\Manager\\Api\\Package\\RootPackage"],["c","Puli\\Manager\\Api\\Package\\RootPackageFile"],["c","Puli\\Manager\\Api\\Package\\RootPackageFileManager"],["c","Puli\\Manager\\Api\\Package\\UnsupportedVersionException"],["c","Puli\\Manager\\Api\\Php\\Argument"],["c","Puli\\Manager\\Api\\Php\\Clazz"],["c","Puli\\Manager\\Api\\Php\\Import"],["c","Puli\\Manager\\Api\\Php\\Method"],["c","Puli\\Manager\\Api\\Php\\ReturnValue"],["c","Puli\\Manager\\Api\\Puli"],["c","Puli\\Manager\\Api\\PuliPlugin"],["c","Puli\\Manager\\Api\\Repository\\NoSuchPathMappingException"],["c","Puli\\Manager\\Api\\Repository\\PathConflict"],["c","Puli\\Manager\\Api\\Repository\\PathMapping"],["c","Puli\\Manager\\Api\\Repository\\PathMappingState"],["c","Puli\\Manager\\Api\\Repository\\RepositoryManager"],["c","Puli\\Manager\\Api\\Repository\\RepositoryNotEmptyException"],["c","Puli\\Manager\\Assert\\Assert"],["c","Puli\\Manager\\Config\\AbstractConfigFileManager"],["c","Puli\\Manager\\Config\\ConfigFileManagerImpl"],["c","Puli\\Manager\\Config\\ConfigFileStorage"],["c","Puli\\Manager\\Config\\ConfigJsonReader"],["c","Puli\\Manager\\Config\\ConfigJsonWriter"],["c","Puli\\Manager\\Config\\DefaultConfig"],["c","Puli\\Manager\\Config\\EnvConfig"],["c","Puli\\Manager\\Conflict\\CyclicDependencyException"],["c","Puli\\Manager\\Conflict\\OverrideGraph"],["c","Puli\\Manager\\Conflict\\PackageConflict"],["c","Puli\\Manager\\Conflict\\PackageConflictDetector"],["c","Puli\\Manager\\Conflict\\PackageConflictException"],["c","Puli\\Manager\\Discovery\\Binding\\AbstractReloadBindingDescriptors"],["c","Puli\\Manager\\Discovery\\Binding\\AddBindingDescriptorToPackageFile"],["c","Puli\\Manager\\Discovery\\Binding\\Bind"],["c","Puli\\Manager\\Discovery\\Binding\\BindingDescriptorCollection"],["c","Puli\\Manager\\Discovery\\Binding\\DisableBindingUuid"],["c","Puli\\Manager\\Discovery\\Binding\\EnableBindingUuid"],["c","Puli\\Manager\\Discovery\\Binding\\LoadBindingDescriptor"],["c","Puli\\Manager\\Discovery\\Binding\\ReloadBindingDescriptorsByTypeName"],["c","Puli\\Manager\\Discovery\\Binding\\ReloadBindingDescriptorsByUuid"],["c","Puli\\Manager\\Discovery\\Binding\\RemoveBindingDescriptorFromPackageFile"],["c","Puli\\Manager\\Discovery\\Binding\\SyncBindingUuid"],["c","Puli\\Manager\\Discovery\\Binding\\UnloadBindingDescriptor"],["c","Puli\\Manager\\Discovery\\DiscoveryManagerImpl"],["c","Puli\\Manager\\Discovery\\Type\\AddTypeDescriptorToPackageFile"],["c","Puli\\Manager\\Discovery\\Type\\BindingTypeDescriptorCollection"],["c","Puli\\Manager\\Discovery\\Type\\DefineType"],["c","Puli\\Manager\\Discovery\\Type\\LoadTypeDescriptor"],["c","Puli\\Manager\\Discovery\\Type\\RemoveTypeDescriptorFromPackageFile"],["c","Puli\\Manager\\Discovery\\Type\\SyncTypeName"],["c","Puli\\Manager\\Discovery\\Type\\UnloadTypeDescriptor"],["c","Puli\\Manager\\Discovery\\Type\\UpdateDuplicateMarksForTypeName"],["c","Puli\\Manager\\Factory\\FactoryManagerImpl"],["c","Puli\\Manager\\Factory\\Generator\\DefaultGeneratorRegistry"],["c","Puli\\Manager\\Factory\\Generator\\Discovery\\KeyValueStoreDiscoveryGenerator"],["c","Puli\\Manager\\Factory\\Generator\\KeyValueStore\\ArrayStoreGenerator"],["c","Puli\\Manager\\Factory\\Generator\\KeyValueStore\\JsonFileStoreGenerator"],["c","Puli\\Manager\\Factory\\Generator\\KeyValueStore\\NullStoreGenerator"],["c","Puli\\Manager\\Factory\\Generator\\KeyValueStore\\PhpRedisStoreGenerator"],["c","Puli\\Manager\\Factory\\Generator\\KeyValueStore\\PredisStoreGenerator"],["c","Puli\\Manager\\Factory\\Generator\\KeyValueStore\\RiakStoreGenerator"],["c","Puli\\Manager\\Factory\\Generator\\Repository\\FilesystemRepositoryGenerator"],["c","Puli\\Manager\\Package\\PackageFileStorage"],["c","Puli\\Manager\\Package\\PackageJsonReader"],["c","Puli\\Manager\\Package\\PackageJsonWriter"],["c","Puli\\Manager\\Package\\PackageManagerImpl"],["c","Puli\\Manager\\Package\\RootPackageFileManagerImpl"],["c","Puli\\Manager\\Php\\ClassWriter"],["c","Puli\\Manager\\Repository\\Iterator\\RecursivePathIterator"],["c","Puli\\Manager\\Repository\\Iterator\\RecursivePathsIterator"],["c","Puli\\Manager\\Repository\\Mapping\\AddPathMappingToPackageFile"],["c","Puli\\Manager\\Repository\\Mapping\\ConflictCollection"],["c","Puli\\Manager\\Repository\\Mapping\\LoadPathMapping"],["c","Puli\\Manager\\Repository\\Mapping\\OverrideConflictingPackages"],["c","Puli\\Manager\\Repository\\Mapping\\PathMappingCollection"],["c","Puli\\Manager\\Repository\\Mapping\\PopulateRepository"],["c","Puli\\Manager\\Repository\\Mapping\\RemovePathMappingFromPackageFile"],["c","Puli\\Manager\\Repository\\Mapping\\SyncRepositoryPath"],["c","Puli\\Manager\\Repository\\Mapping\\UnloadPathMapping"],["c","Puli\\Manager\\Repository\\Mapping\\UpdateConflicts"],["c","Puli\\Manager\\Repository\\RepositoryManagerImpl"],["c","Puli\\Manager\\Transaction\\AtomicOperation"],["c","Puli\\Manager\\Transaction\\InterceptedOperation"],["c","Puli\\Manager\\Transaction\\OperationInterceptor"],["c","Puli\\Manager\\Transaction\\Transaction"],["c","Puli\\Manager\\Util\\DistinguishedName"],["c","Puli\\Manager\\Util\\System"],["c","Puli\\Manager\\Util\\TwoDimensionalHashMap"],["c","Puli\\Repository\\Api\\EditableRepository"],["c","Puli\\Repository\\Api\\Resource\\BodyResource"],["c","Puli\\Repository\\Api\\Resource\\FilesystemResource"],["c","Puli\\Repository\\Api\\Resource\\Resource"],["c","Puli\\Repository\\Api\\Resource\\ResourceMetadata"],["c","Puli\\Repository\\Api\\ResourceCollection"],["c","Puli\\Repository\\Api\\ResourceIterator"],["c","Puli\\Repository\\Api\\ResourceNotFoundException"],["c","Puli\\Repository\\Api\\ResourceRepository"],["c","Puli\\Repository\\Api\\UnsupportedLanguageException"],["c","Puli\\Repository\\Api\\UnsupportedOperationException"],["c","Puli\\Repository\\Api\\UnsupportedResourceException"],["c","Puli\\Repository\\FilesystemRepository"],["c","Puli\\Repository\\InMemoryRepository"],["c","Puli\\Repository\\NullRepository"],["c","Puli\\Repository\\RepositoryFactoryException"],["c","Puli\\Repository\\Resource\\AbstractFilesystemResource"],["c","Puli\\Repository\\Resource\\Collection\\ArrayResourceCollection"],["c","Puli\\Repository\\Resource\\Collection\\FilesystemResourceCollection"],["c","Puli\\Repository\\Resource\\Collection\\LazyResourceCollection"],["c","Puli\\Repository\\Resource\\DirectoryResource"],["c","Puli\\Repository\\Resource\\FileResource"],["c","Puli\\Repository\\Resource\\GenericResource"],["c","Puli\\Repository\\Resource\\Iterator\\RecursiveResourceIterator"],["c","Puli\\Repository\\Resource\\Iterator\\RecursiveResourceIteratorIterator"],["c","Puli\\Repository\\Resource\\Iterator\\ResourceCollectionIterator"],["c","Puli\\Repository\\Resource\\Iterator\\ResourceFilterIterator"],["c","Puli\\Repository\\Resource\\Metadata\\FilesystemMetadata"],["c","Puli\\Repository\\StreamWrapper\\ResourceStreamWrapper"],["c","Puli\\Repository\\StreamWrapper\\StreamWrapper"],["c","Puli\\Repository\\StreamWrapper\\StreamWrapperException"],["c","Puli\\Repository\\Uri\\InvalidUriException"],["c","Puli\\Repository\\Uri\\Uri"],["c","Puli\\SymfonyBridge\\Config\\ChainableFileLocator"],["c","Puli\\SymfonyBridge\\Config\\ChainableFileLocatorImpl"],["c","Puli\\SymfonyBridge\\Config\\FileLocatorChain"],["c","Puli\\SymfonyBridge\\Config\\PuliFileLocator"],["c","Puli\\SymfonyBridge\\HttpKernel\\ChainableKernelFileLocator"],["c","Puli\\TwigExtension\\CacheWarmer\\TwigTemplateCacheWarmer"],["c","Puli\\TwigExtension\\Node\\LoadedByPuliNode"],["c","Puli\\TwigExtension\\NodeVisitor\\AbstractPathResolver"],["c","Puli\\TwigExtension\\NodeVisitor\\LoadedByPuliTagger"],["c","Puli\\TwigExtension\\NodeVisitor\\TemplatePathResolver"],["c","Puli\\TwigExtension\\PathResolver"],["c","Puli\\TwigExtension\\PuliExtension"],["c","Puli\\TwigExtension\\PuliTemplateLoader"],["c","Puli\\TwigExtension\\TokenParser\\LoadedByPuliTokenParser"],["c","Webmozart\\KeyValueStore\\Api\\InvalidKeyException"],["c","Webmozart\\KeyValueStore\\Api\\KeyValueStore"],["c","Webmozart\\KeyValueStore\\Api\\ReadException"],["c","Webmozart\\KeyValueStore\\Api\\SerializationFailedException"],["c","Webmozart\\KeyValueStore\\Api\\UnserializationFailedException"],["c","Webmozart\\KeyValueStore\\Api\\UnsupportedValueException"],["c","Webmozart\\KeyValueStore\\Api\\WriteException"],["c","Webmozart\\KeyValueStore\\ArrayStore"],["c","Webmozart\\KeyValueStore\\CachedStore"],["c","Webmozart\\KeyValueStore\\JsonFileStore"],["c","Webmozart\\KeyValueStore\\NullStore"],["c","Webmozart\\KeyValueStore\\PhpRedisStore"],["c","Webmozart\\KeyValueStore\\PredisStore"],["c","Webmozart\\KeyValueStore\\RiakStore"],["c","Webmozart\\KeyValueStore\\Util\\KeyUtil"],["c","Webmozart\\KeyValueStore\\Util\\Serializer"]];
