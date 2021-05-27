 var WorkflowDesignerConstants = {
  ActivityColor: "#ECF0F1",
  ActivityTextColor: "#2D3436",
  ActivityInitialColor: "#27AE60",
  ActivityInitialTextColor: "#FFFFFF",
  ActivityFinalColor: "#2980B9",
  ActivityFinalTextColor: "#FFFFFF",
  ActivityShape: "#CECECE",
  SelectColor: "#F39C12",
  SelectTextColor: "#FFFFFF",
  SelectSubProcessColor: "#e3b015",
  SelectSubProcessTextColor: "#FFFFFF",
  ButtonActive: "#D4D8D9",
  BarColor: "#EDF1F2",
  BarSeparatorColor: "#D9DEE0",
  DeleteConfirm: "Sei sicuro di voler eliminare gli articoli selezionati?",
  DeleteConfirmCurrent: "Sei sicuro di voler eliminare questo articolo?",
  FieldIsRequired: "Il campo è obbligatiorio!",
  FieldMustBeUnique: "Il campo deve essere unico!",
  ButtonTextDelete: "Elimina",
  ButtonTextCreate: "Creare",
  ButtonTextSave: "Salvare",
  ButtonTextYes: "Sì",
  ButtonTextNo: "No",
  ButtonTextOk: "Ok",
  ButtonTextCancel: "Annulla",
  ButtonTextClose: "Vicino",
  ButtonTextUndo: "Disfare",
  ButtonTextRedo: "Rifare",
  SaveConfirm: "Salva I Cambiamenti?",
  CloseWithoutSaving: "Chiudi senza salvare?",
  TransitionAuto: "Auto",
  DialogConfirmText: "Domanda",
  AlertTitle: "Warning",
  None: "Nessuna",
  Warning: "Avvertimento",
  SwitchToExpertMode: "Switch To Expert Mode",
  SwitchToDefaultMode: "Switch To Default Mode",
  InfoBlockLabel: {
    Activity: "Attività:",
    Transition: "Transizioni:",
    Command: "Comandi:"
  },
  ActivityNamePrefix: "Attività_",
  ActivityFormLabel: {
    Title: "Attività",
    TitleForInline: "Activity Inline",
    Name: "Nome",
    State: "Stato",
    IsInitial: "Iniziale",
    IsFinal: "Finale",
    IsForSetState: "Per stato impostato",
    IsAutoSchemeUpdate: "Aggiornamento automatico dello schema",
    Implementation: "Implementazione",
    PreExecutionImplementation: "Implementazione pre-esecuzione",
    ImpOrder: "Ordine",
    ImpAction: "Azione",
    ImpActionParameter: "Parametro di azione",
    Annotations: "Annotations",
    AnnotationName: "Name",
    AnnotationValue: "Value",
    Scheme: "Inline scheme",
    AlwaysConditionShouldBeSingle: "Le condizioni sempre dovrebbero essere singole",
    OtherwiseConditionShouldBeSingle: "Altrimenti la condizione dovrebbe essere singola"
  },
  TransitionFormLabel: {
    Title: "Transizione",
    Name: "Nome",
    From: "Dall'attività",
    To: "All'attività",
    Classifier: "Classificatore",
    Restrictions: "Restrizioni",
    RestrictionsType: "Genere",
    RestrictionsActor: "Attore",
    Condition: "Condizione",
    ConditionType: "Genere",
    ConditionAction: "Azione",
    ResultOnPreExecution: "Risultato su PreExecution",
    Trigger: "Grilletto",
    TriggerType: "Genere",
    TriggerAuto: "Auto",
    TriggerCommand: "Comando",
    TriggerTimer: "Timer",
    ConditionActionParameter: "Parametro di azione",
    ConditionExpression: "Expression",
    ConditionInversion: "Inverti il ​​risultato dell'azione",
    ConditionsConcatenationType: "Tipo di concatenazione delle condizioni",
    AllowConcatenationType: "Concat consentire come",
    RestrictConcatenationType: "Concat limitare come",
    IsFork: "È una forchetta",
    MergeViaSetState: "Unisci sottoprocesso tramite lo stato impostato",
    DisableParentStateControl: "Disabilitare il controllo del processo genitore",
    ShowConcatParameters: "Mostra concatenazione",
    HideConcatParameters: "Nascondi concatenazione",
    Annotations: "Annotations",
    AnnotationName: "Name",
    AnnotationValue: "Value",
    InlinedFinalActivityName: "Inlined Final Activity Name",
    Allow: "Allow",
    Restrict: "Restrict",
    ConditionsListShouldNotBeEmpty: "L'elenco delle condizioni non dovrebbe essere vuoto",
    AlwaysConditionShouldBeSingle: "Always condition should be single",
    OtherwiseConditionShouldBeSingle: "Otherwise condition should be single",
    ConditionalLabel: "Conditional",
    AlwaysLabel: "Always",
    ActionLabel: "Action",
    ExpressionLabel: "Expression",
    OtherwiseLabel: "Otherwise",
    Subprocess: "Subprocess",
    SubprocessNone: "None",
    SubprocessStart: "Start",
    SubprocessFinalize: "Finalize",
    SubprocessAuto: "Auto",
    SubprocessStartSettings: "Subprocess start settings",
    SubprocessFinalizeSettings: "Subprocess finalize settings",
    SubprocessName: "Subprocess name",
    SubprocessId: "Subprocess id",
    SubprocessIdPlaceholder: "Autogenerated GUID",
    SubprocessNamePlaceholder: "Same as transition name",
    SubprocessStartupType: "Subprocess startup type",
    SubprocessStartupTypeSameThread: "Same thread",
    SubprocessStartupTypeAnotherThread: "Another thread",
    SubprocessStartupTypeTimerQueue: "Timer queue",
    SubprocessStartupParameterCopyStrategy: "Parameters copy strategy",
    SubprocessStartupParameterCopyStrategyCopyAll: "Copy all",
    SubprocessStartupParameterCopyStrategyIgnoreAll: "Ignore all",
    SubprocessStartupParameterCopyStrategyCopySpecified: "Copy specified",
    SubprocessStartupParameterCopyStrategyIgnoreSpecified: "Ignore specified",
    SubprocessSpecifiedParameters: "Specified parameters",
    SubprocessFinalizeParameterMergeStrategy: "Parameters merge strategy",
    SubprocessFinalizeParameterMergeStrategyOverwriteAllNulls: "Overwrite all nulls",
    SubprocessFinalizeParameterMergeStrategyOverwriteAll: "Overwrite all",
    SubprocessFinalizeParameterMergeStrategyOverwriteSpecified: "Overwrite specified",
    SubprocessFinalizeParameterMergeStrategyDontOverwriteSpecified: "Don't overwrite specified"
  },
  LocalizationFormLabel: {
    Title: "Localizzazione",
    ObjectName: "ObjectName",
    Type: "Genere",
    IsDefault: "IsDefault",
    Culture: "Cultura",
    Value: "Valore",
    Types: [
      "Command",
      "State",
      "Parameter"
    ]
  },
  TimerFormLabel: {
    Title: "Timer",
    Name: "Nome",
    Type: "genere",
    Value: "Valore",
    Types: [
      "Command",
      "State",
      "Parameter"
    ],
    OverrideHint: "Sovrascrivere il timer se esiste",
    Override: "Sovrascrivere"
  },
  ParameterFormLabel: {
    Title: "parametri",
    Name: "Nome",
    Type: "Genere",
    Purpose: "Scopo",
    Value: "Valore",
    InitialValue: "Valore iniziale",
    ShowSystemParameters: "Mostra i parametri di sistema"
  },
  ActorFormLabel: {
    Title: "Attori",
    Name: "Nome",
    Rule: "Regola",
    Value: "Valore"
  },
  CommandFormLabel: {
    Title: "Comando",
    Name: "Nome",
    InputParameters: "Parametri di input",
    InputParametersName: "Nome",
    InputParametersIsRequired: "necessario",
    InputParametersParameter: "Parametro",
    InputParametersDefaultValue: "Predefinito"
  },
  CommandParametersFormLabel: {
    Title: "command parameters",
    InputParametersName: "Name",
    InputParametersIsRequired: "Required",
    InputParametersParameter: "Parameter",
    InputParametersDefaultValue: "Default"
  },
  ProcessInfoFormLabel: {
    Title: "Additional Parameters",
    IsObsolete: "IsObsolete",
    DefiningParameters: "Defining parameters",
    ProcessParameters: "Process parameters",
    SystemParametersTabName: "System Parameters",
    ProcessParametersTabName: "Process Parameters",
    HistoryTabName: "History",
    TimersTabName: "Timers",
    TagsTabName: "Tags",
    TagsInputPlaceholder: "Start entering a name to add a tag",
    HistoryTabFromLabel: "From",
    HistoryTabFromStateLabel: "From State",
    HistoryTabToLabel: "To",
    HistoryTabToStateLabel: "To State",
    HistoryTabExecutorIdLabel: "Executor Id",
    HistoryTabActorIdLabel: "Actor Id",
    HistoryTabTimeLabel: "Time",
    HistoryTabTriggerNameLabel: "Trigger Name",
    HistoryTabTransitionClassifierNameLabel: "",
    ParametersNameLabel: "Name",
    ParametersValueLabel: "Value",
    TimersTabNameLabel: "Name",
    TimersTabValueLabel: "Value",
    RootProcess: "Root Process",
    TagsLabel: "Tags (separated by commas)",
    GeneralTabLabel: "General",
    ProcessIdLabel: "Process Id"
  },
  DropdownValues: {
    Name: "Name",
    Value: "Value",
    Dropdown: "Dropdown",
    Values: "values"
  },
  CodeActionsFormLabel: {
    Title: "Azioni di codice",
    Name: "Nome",
    ActionCode: "Codice di azione",
    IsGlobal: "È globale",
    IsAsync: "Async",
    Type: "Genere",
    GlobalDeleteMessage: "Se hai eliminato Global CodeAction - <br/> <b> altri schemi non potranno chiamarlo! </b>",
    UnGlobalMessage: "Hai cambiato lo stato del flag globale. <br/> Dopo aver salvato questo schema, verrà creata un'Azione Code locale basata su questa Global CodeAction.",
    EditParameters: "Edit parameters",
    Parameters: "Parameters",
    Text: "Text",
    TextArea: "TextArea",
    Number: "Number",
    Checkbox: "Checkbox",
    Dropdown: "Dropdown",
    MultiSelect: "MultiSelect",
    DateTime: "Date/Time",
    Values: "Values",
    DropdownName: "Name",
    DropdownValue: "Value",
    DropdownShouldContainValues: "Dropdown should contain values",
    IsRequired: "Required",
    DefaultValue: "Default value",
    Json: "Json",
    TitleField: "Title"
  },
  EditParametersFormlabel: {
    Title: "Edit parameter values",
    NumberRequired: "Should be a numeric value",
    DateShouldBeInISOFormat: "Date/Time parameter should be in ISO8601 format",
    SwitchToJson: "Switch to JSON editor",
    SwitchToConstructor: "Switch to parameter values editor",
    InvalidJson: "JSON object is invalid or does not match the model"
  },
  ToolbarLabel: {
    CreateActivity: "Crea attività",
    CreateInline: "Create inline (template)",
    CopySelected: "Copia selezionata",
    Undo: "Disfare",
    Redo: "Rifare",
    Move: "Mossa",
    ZoomIn: "Ingrandire",
    ZoomOut: "Zoom indietro",
    ZoomPositionDefault: "Zoom predefinito",
    FullScreen: "A schermo intero",
    Refresh: "Ricaricare",
    AutoArrangement: "Sistemazione automatica",
    Actors: "Attori",
    Commands: "Comandi",
    Parameters: "Parametri",
    Localization: "Localizzazione",
    Timers: "Timer",
    AdditionalParameters: "Parametri aggiuntivi",
    CodeActions: "Azioni di codice",
    Info: "Informazioni estese",
    Delete: "Elimina",
    Clone: "Clone",
    Settings: "Impostazioni",
    CreateTransition: "Crea una transizione",
    CreateActivityTransition: "Crea un'attività e una transizione",
    Legend: "Leggenda",
    ProcessInfo: "Process Info",
    Inline: "The scheme can be inlined",
    Elements: "Elements",
    Library: "Library",
    ResetSettings: "Reset settings"
  },
  LibraryLabel: {
    PluginRequired: "Plugin required:"
  },
  ErrorActivityIsInitialCountText: "Un elemento deve essere contrassegnato come flag Iniziale",
  ErrorActivityIsFinalCountText: "This scheme is Inlined. One or more elements must be marked flag Final",
  ErrorReadOnlySaveText: "Designer in modalità ReadOnly, non puoi salvarlo.",
  ErrorInvalidObjectsSaveText: "Can't save the schema. Those objects are in invalid state",
  BrokenReferencesDialogText: "This schema contains references to Actions, Conditions or Rules that aren't defined by this schema or current action providers. Do you want to keep them?",
  EditCodeSettings: {
    Height: 600,
    Width: 1000,
    CodeHeight: 390,
    MessageBoxHeight: 400,
    MessageBoxWidth: 600,
    SuccessBoxHeight: 150,
    SuccessBoxWidth: 300
  },
  EditCodeLabel: {
    Title: "Modifica il codice",
    EditCodeButton: "Modifica il codice",
    Usings: "Usings",
    Compile: "Compilare",
    CompileSucceeded: "La compilazione è riuscita.",
    Success: "Successo",
    Error: "Errore",
    OK: "OK",
    ShowUsings: "Mostra gli usi",
    HideUsings: "Nascondi gli usi"
  },
  EditJSONLabel: {
    Title: "Modifica il valore in JSON",
    CreateEmptyType: "Creare",
    Format: "Formato"
  },
  EditExpressionSettings: {
    Height: 600,
    Width: 1000,
    CodeHeight: 390,
    MessageBoxHeight: 400,
    MessageBoxWidth: 600,
    SuccessBoxHeight: 150,
    SuccessBoxWidth: 300
  },
  EditExpressionLabel: {
    Title: "Edit expression",
    Validate: "Validate",
    Succeeded: "Expression is valid.",
    Success: "Success",
    Error: "Error",
    OK: "OK"
  },
  Elements: {
    Header: "Elements",
    BasicActivity: "Basic Activity",
    BasicActivityDesc: "It determines a state and the order, in which Actions are executed in your process.",
    InlineHeader: "Inline",
    InitialActivity: "Initial Activity",
    InitialActivityDesc: "It a initial state.",
    FinalActivity: "Final Activity",
    FinalActivityDesc: "It a final state."
  },
  OverviewMap: {
    show: true,
    width: 300,
    height: 150
  },
  UndoDepth: 200,
  DefaultCulture: "it-IT",
  ErrorInBrowserConsole: "See more info in the browser console.",
  EditJSONSettings: {
    Height: 600,
    Width: 1000,
    CodeHeight: 480
  }
};